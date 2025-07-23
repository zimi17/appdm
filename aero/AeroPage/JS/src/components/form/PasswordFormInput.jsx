"use client";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { LuAlertCircle, LuEye, LuEyeOff } from "react-icons/lu";
import { cn } from "@/utils";

const PasswordFormInput = ({
  control,
  name,
  label,
  className,
  labelClassName,
  containerClassName,
  noValidate,
  fullWidth,
  ...other
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Controller
      control={control}
      defaultValue={""}
      render={({ field, fieldState }) => (
        <div
          className={cn(containerClassName, "relative", fullWidth && "w-full")}
        >
          {label && (
            <label
              className={cn(
                "mb-2 block text-sm font-medium text-default-900",
                labelClassName
              )}
              htmlFor={name}
            >
              {label}
            </label>
          )}
          <div className={cn("flex", fullWidth && "w-full")}>
            <div className={cn("relative", fullWidth && "w-full")}>
              <input
                {...other}
                {...field}
                type={showPassword ? "text" : "password"}
                className={cn(
                  "rounded-e-none rounded-s-lg border border-default-200 px-4 py-2.5 focus:border-primary",
                  className,
                  fullWidth && "w-full",
                  {
                    "border-red-500 focus:border-red-500":
                      !noValidate && fieldState.error?.message,
                  }
                )}
              />

              {!noValidate && fieldState.error?.message && (
                <div className="pointer-events-none absolute inset-y-0 end-4 flex items-center">
                  <LuAlertCircle size={20} className="text-red-500" />
                </div>
              )}
            </div>
            <button
              className="-ms-px inline-flex items-center justify-center rounded-e border border-white/10 bg-transparent px-4 py-2.5"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              type="button"
            >
              {showPassword ? (
                <LuEyeOff size={20} className="text-zinc-100" />
              ) : (
                <LuEye size={20} className="text-zinc-100" />
              )}
            </button>
          </div>
          {!noValidate && fieldState.error?.message && (
            <p className="mt-2 text-xs text-red-600">
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
      name={name}
    />
  );
};

export default PasswordFormInput;
