import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function BrandLogo() {
  return (
    <div className="flex items-center gap-2.5 mb-8">
      <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary to-orange-600 shadow-[0_0_20px_rgba(255,122,0,0.4)]">
        {/* Tiffin / Box icon */}
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect
            x="2"
            y="7"
            width="14"
            height="9"
            rx="2"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M5 7V5.5C5 3.567 6.567 2 8.5 2h1C11.433 2 13 3.567 13 5.5V7"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M2 10h14"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <span
        className="text-xl font-bold tracking-tight text-white"
        style={{ letterSpacing: "-0.4px" }}
      >
        TiffinShare
      </span>
    </div>
  );
}

function SocialButton({ icon, label }) {
  return (
    <button
      type="button"
      className="
        flex-1 flex items-center justify-center gap-2.5 
        px-4 py-2.5 rounded-xl text-sm font-medium 
        text-slate-300 border border-white/10 
        bg-white/5 hover:bg-white/10 hover:text-white 
        transition-all duration-200 hover:-translate-y-0.5
      "
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-3 my-6">
      <div
        className="flex-1 h-px"
        style={{ background: "rgba(255,255,255,0.08)" }}
      />
      <span className="text-xs font-medium tracking-widest uppercase text-slate-500">
        or continue with
      </span>
      <div
        className="flex-1 h-px"
        style={{ background: "rgba(255,255,255,0.08)" }}
      />
    </div>
  );
}

function InputField({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  rightElement,
  icon,
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-slate-400"
        style={{ letterSpacing: "0.01em" }}
      >
        {label}
      </label>
      <div className="relative">
        {/* Left icon */}
        {icon && (
          <span
            className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-200"
            style={{ color: focused ? "#FF7A00" : "#475569" }}
          >
            {icon}
          </span>
        )}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="
            w-full rounded-xl text-sm text-white placeholder-slate-500
            bg-white/5 border border-white/10
            focus:border-primary focus:ring-2 focus:ring-primary/20
            outline-none transition-all duration-200
            px-4 py-3
          "
          style={{
            paddingLeft: icon ? "40px" : "14px",
            paddingRight: rightElement ? "40px" : "14px",
          }}
        />
        {/* Right element (e.g. eye toggle) */}
        {rightElement && (
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
            {rightElement}
          </div>
        )}
      </div>
    </div>
  );
}

const MailIcon = (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
    <rect
      x="1"
      y="3"
      width="14"
      height="10"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.3"
    />
    <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

const LockIcon = (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
    <rect
      x="3"
      y="7"
      width="10"
      height="7"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.3"
    />
    <path
      d="M5 7V5a3 3 0 016 0v2"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

const GoogleIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M15.68 8.18c0-.57-.05-1.11-.14-1.64H8v3.1h4.31a3.68 3.68 0 01-1.6 2.42v2h2.58c1.51-1.39 2.39-3.44 2.39-5.88z"
      fill="#4285F4"
    />
    <path
      d="M8 16c2.16 0 3.97-.72 5.3-1.94l-2.58-2a4.8 4.8 0 01-7.16-2.52H.87v2.07A8 8 0 008 16z"
      fill="#34A853"
    />
    <path
      d="M3.56 9.54A4.8 4.8 0 013.3 8c0-.54.09-1.06.26-1.54V4.39H.87A8 8 0 000 8c0 1.29.31 2.5.87 3.61l2.69-2.07z"
      fill="#FBBC05"
    />
    <path
      d="M8 3.18c1.22 0 2.31.42 3.17 1.24l2.37-2.37A8 8 0 00.87 4.39l2.7 2.07A4.8 4.8 0 018 3.18z"
      fill="#EA4335"
    />
  </svg>
);

const MicrosoftIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="0" y="0" width="7.5" height="7.5" fill="#F25022" />
    <rect x="8.5" y="0" width="7.5" height="7.5" fill="#7FBA00" />
    <rect x="0" y="8.5" width="7.5" height="7.5" fill="#00A4EF" />
    <rect x="8.5" y="8.5" width="7.5" height="7.5" fill="#FFB900" />
  </svg>
);

// ─── Background Blobs ─────────────────────────────────────────────────────

function BackgroundScene() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {/* Deep base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(15,23,80,0.85) 0%, #020617 70%)",
        }}
      />
      {/* Orange orb top-left */}
      <div
        className="absolute rounded-full"
        style={{
          width: 560,
          height: 560,
          top: -200,
          left: -140,
          background:
            "radial-gradient(circle, rgba(255,122,0,0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "drift1 14s ease-in-out infinite alternate",
        }}
      />
      {/* Navy orb bottom-right */}
      <div
        className="absolute rounded-full"
        style={{
          width: 420,
          height: 420,
          bottom: -100,
          right: -80,
          background:
            "radial-gradient(circle, rgba(30,58,138,0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "drift2 10s ease-in-out infinite alternate",
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)",
        }}
      />
      <style>{`
        @keyframes drift1 { 0% { transform: translate(0,0) scale(1); } 100% { transform: translate(30px,25px) scale(1.08); } }
        @keyframes drift2 { 0% { transform: translate(0,0) scale(1); } 100% { transform: translate(-25px,20px) scale(1.06); } }
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>
    </div>
  );
}

// ─── Main Login Page ────────────────────────

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  //  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: wire up your auth service here
    setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 1500);
  };

  const EyeIcon = showPw ? (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <path
        d="M2 2l12 12M6.5 6.7A2 2 0 0011.3 9.5M4.5 4.7A5 5 0 001 8s2.5 5 7 5a6.5 6.5 0 003.5-1M7 3.1A7 7 0 0115 8s-.8 1.6-2 3"
        stroke="#64748B"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  ) : (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <path
        d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z"
        stroke="#64748B"
        strokeWidth="1.3"
      />
      <circle cx="8" cy="8" r="2" stroke="#64748B" strokeWidth="1.3" />
    </svg>
  );

  return (
    <>
      <BackgroundScene />

      {/* Page wrapper */}
      <div
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-10"
        style={{ fontFamily: "'Inter', sans-serif", zIndex: 1 }}
      >
        {/* Card */}
        <div
          className="w-full max-w-md rounded-2xl p-9"
          style={{
            background: "rgba(15,23,42,0.72)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.04), 0 32px 64px -12px rgba(0,0,0,0.7), 0 0 80px -20px rgba(255,122,0,0.07)",
            animation: "cardIn 0.45s cubic-bezier(0.22,1,0.36,1) both",
          }}
        >
          <style>{`
            @keyframes cardIn {
              from { opacity: 0; transform: translateY(20px) scale(0.98); }
              to   { opacity: 1; transform: translateY(0) scale(1); }
            }
          `}</style>

          {/* Brand */}
          <BrandLogo />

          {/* Heading */}
          <div className="mb-7">
            <h1
              className="text-2xl font-bold text-white mb-1.5"
              style={{ letterSpacing: "-0.5px" }}
            >
              Welcome back
            </h1>
            <p
              className="text-sm text-slate-400"
              style={{ letterSpacing: "0.01em" }}
            >
              Sign in to your TiffinShare account to continue.
            </p>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-3">
            <SocialButton icon={GoogleIcon} label="Google" />
            <SocialButton icon={MicrosoftIcon} label="Microsoft" />
          </div>

          <Divider />

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
              label="Email address"
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={MailIcon}
            />

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-400"
                  style={{ letterSpacing: "0.01em" }}
                >
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-xs font-medium transition-colors duration-150"
                  style={{ color: "#FF7A00", letterSpacing: "0.01em" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#FF9233")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#FF7A00")
                  }
                >
                  Forgot password?
                </Link>
              </div>
              <InputField
                id="password"
                type={showPw ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                icon={LockIcon}
                rightElement={
                  <button
                    type="button"
                    onClick={() => setShowPw(!showPw)}
                    className="flex items-center justify-center p-1 rounded transition-opacity duration-150 hover:opacity-80"
                    aria-label={showPw ? "Hide password" : "Show password"}
                  >
                    {EyeIcon}
                  </button>
                }
              />
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2.5 pt-0.5">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 rounded cursor-pointer"
                style={{ accentColor: "#FF7A00" }}
              />
              <label
                htmlFor="remember"
                className="text-sm text-slate-400 cursor-pointer select-none"
              >
                Remember me for 30 days
              </label>
            </div>

            {/* CTA */}
            <button
              type="submit"
              disabled={ loading}
              className="w-full rounded-xl text-white font-semibold text-sm py-3 transition-all duration-200 mt-1 disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                background: loading
                  ? "rgba(255,122,0,0.7)"
                  : "linear-gradient(135deg, #FF7A00 0%, #FF5500 100%)",
                boxShadow: "0 4px 20px rgba(255,122,0,0.30)",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.currentTarget.style.transform =
                    "translateY(-2px) scale(1.012)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(255,122,0,0.48)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(255,122,0,0.30)";
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(0.99)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-2px) scale(1.012)";
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="white"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="white"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Signing in…
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Footer */}
          <p
            className="text-center text-sm text-slate-500 mt-7"
            style={{ letterSpacing: "0.01em" }}
          >
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="font-medium transition-colors duration-150"
              style={{ color: "#FF7A00" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FF9233")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#FF7A00")}
            >
              Create one free
            </Link>
          </p>
        </div>

        {/* Bottom security note */}
        <div className="flex items-center gap-1.5 mt-6 text-xs text-slate-600">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 1L1 4v3c0 2.76 2.13 5.35 5 5.99C8.87 12.35 11 9.76 11 7V4L6 1z"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
          Secured with 256-bit SSL encryption
        </div>
      </div>
    </>
  );
}
