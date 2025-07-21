"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Eye, EyeOff, User, Building } from "lucide-react";
import api from "../../config/axios";
const SignupPage = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    role: "creator",
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
    // Creator specific
    socialMedia: {
      instagram: "",
      youtube: "",
      tiktok: "",
      twitter: "",
    },
    categories: [],
    pricing: {
      post: "",
      story: "",
      video: "",
    },
    location: "",
    // Business specific
    companyName: "",
    industry: "",
    promotionNeeds: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const categories = [
    "Fashion",
    "Tech",
    "Food",
    "Travel",
    "Fitness",
    "Beauty",
    "Gaming",
    "Music",
    "Art",
    "Education",
    "Business",
    "Lifestyle",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (step === 1) {
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      setStep(2);
      return;
    }

    try {
      setLoading(true);

      // Step 1: Register user
      const registerPayload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      };

      // ➕ If user is business, include additional fields
      if (formData.role === "business") {
        registerPayload.companyName = formData.companyName;
        registerPayload.industry = formData.industry;
        registerPayload.promotionNeeds = formData.promotionNeeds;
      }

      console.log(registerPayload);

      const regRes = await api.post("/api/users/register", registerPayload);
      const { token, user } = regRes.data;

      localStorage.setItem("token", token);

      if (user.role === "creator") {
        // Step 2: Create creator profile
        const creatorProfilePayload = {
          userId: user.id,
          fullName: formData.name,
          socialLinks: {
            instagram: formData.socialMedia.instagram,
            youtube: formData.socialMedia.youtube,
            others: [formData.socialMedia.tiktok, formData.socialMedia.twitter],
          },
          categories: formData.categories,
          pricing: {
            post: parseFloat(formData.pricing.post || 0),
            story: parseFloat(formData.pricing.story || 0),
            video: parseFloat(formData.pricing.video || 0),
          },
          availableLocation: formData.location,
        };

        console.log(creatorProfilePayload);

        await api.post("/api/creator-profiles", creatorProfilePayload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }

      if (formData.role === "creator") {
        navigate("/creator");
      } else if (formData.role === "business") {
        navigate("/business");
      } else if (formData.role === "admin") {
        navigate("/admin");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleCategoryToggle = (category) => {
    const updatedCategories = formData.categories.includes(category)
      ? formData.categories.filter((c) => c !== category)
      : [...formData.categories, category];

    setFormData({
      ...formData,
      categories: updatedCategories,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">CC</span>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-purple-600 hover:text-purple-500"
            >
              Sign in here
            </Link>
          </p>
        </div>

        <div className="bg-white py-8 px-6 shadow-lg rounded-lg">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 1
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                1
              </div>
              <div
                className={`w-16 h-1 ${
                  step >= 2 ? "bg-purple-600" : "bg-gray-200"
                }`}
              ></div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 2
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                2
              </div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>Basic Info</span>
              <span>Profile Details</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 ? (
              <>
                {/* Role Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    I want to join as
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["creator", "business"].map((role) => (
                      <button
                        key={role}
                        type="button"
                        onClick={() => setFormData({ ...formData, role })}
                        className={`px-4 py-3 text-sm font-medium rounded-md capitalize transition-colors flex items-center justify-center space-x-2 ${
                          formData.role === role
                            ? "bg-purple-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {role === "creator" ? (
                          <User className="h-4 w-4" />
                        ) : (
                          <Building className="h-4 w-4" />
                        )}
                        <span>{role}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Basic Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {formData.role === "business"
                        ? "Contact Name"
                        : "Full Name"}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block text-black w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block text-black w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block text-black w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1 relative">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="block w-full text-black px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 text-black top-2.5 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                {formData.role === "creator" ? (
                  <>
                    {/* Social Media Links */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Social Media Profiles
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.keys(formData.socialMedia).map((platform) => (
                          <div key={platform}>
                            <label className="block text-xs font-medium text-gray-600 capitalize mb-1">
                              {platform}
                            </label>
                            <input
                              name={`socialMedia.${platform}`}
                              type="url"
                              value={formData.socialMedia[platform]}
                              onChange={handleChange}
                              placeholder={`https://${platform}.com/username`}
                              className="block text-black w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-sm"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Categories */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Content Categories (Select all that apply)
                      </label>
                      <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                        {categories.map((category) => (
                          <button
                            key={category}
                            type="button"
                            onClick={() => handleCategoryToggle(category)}
                            className={`px-3 py-2 text-xs font-medium rounded-md transition-colors ${
                              formData.categories.includes(category)
                                ? "bg-purple-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Pricing (USD)
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">
                            Per Post
                          </label>
                          <input
                            name="pricing.post"
                            type="number"
                            value={formData.pricing.post}
                            onChange={handleChange}
                            placeholder="100"
                            className="block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">
                            Per Story
                          </label>
                          <input
                            name="pricing.story"
                            type="number"
                            value={formData.pricing.story}
                            onChange={handleChange}
                            placeholder="50"
                            className="block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">
                            Per Video
                          </label>
                          <input
                            name="pricing.video"
                            type="number"
                            value={formData.pricing.video}
                            onChange={handleChange}
                            placeholder="200"
                            className="block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <label
                        htmlFor="location"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Location
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City, Country or 'Online Only'"
                        className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Business Details */}
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company Name
                      </label>
                      <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 text-black py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="industry"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Industry
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        required
                        value={formData.industry}
                        onChange={handleChange}
                        className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                      >
                        <option value="">Select Industry</option>
                        <option value="technology">Technology</option>
                        <option value="fashion">Fashion</option>
                        <option value="food">Food & Beverage</option>
                        <option value="travel">Travel</option>
                        <option value="fitness">Fitness</option>
                        <option value="beauty">Beauty</option>
                        <option value="gaming">Gaming</option>
                        <option value="education">Education</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="promotionNeeds"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Promotion Needs
                      </label>
                      <textarea
                        id="promotionNeeds"
                        name="promotionNeeds"
                        rows={3}
                        value={formData.promotionNeeds}
                        onChange={handleChange}
                        placeholder="Describe what kind of promotion you're looking for..."
                        className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                  </>
                )}
              </>
            )}

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Back
                </button>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-md hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed ${
                  step === 1 ? "ml-auto" : ""
                }`}
              >
                {loading
                  ? "Creating Account..."
                  : step === 1
                  ? "Continue"
                  : "Create Account"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
