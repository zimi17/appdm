'use client'
import TextFormInput from '@/components/form/TextFormInput'
import PasswordFormInput from '@/components/form/PasswordFormInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const SignUpForm = () => {
  const registerFormSchema = yup.object({
    name: yup.string().required('Please enter your full name'),
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Please enter your email'),
    password: yup.string().required('Please enter your password'),
  })
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(registerFormSchema),
  })
  return (
    <form onSubmit={handleSubmit(() => {})} className="shrink">
      <TextFormInput
        containerClassName="mb-4"
        label="Full Name"
        name="name"
        labelClassName="block text-base/normal text-zinc-200"
        className="block rounded border-white/10 bg-transparent py-2.5 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
        fullWidth
        placeholder="Enter your Full Name"
        control={control}
      />
      <TextFormInput
        containerClassName="mb-4"
        label="Email address"
        name="email"
        labelClassName="block text-base/normal text-zinc-200"
        className="block rounded border-white/10 bg-transparent py-2.5 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
        placeholder="Enter your email"
        fullWidth
        control={control}
      />
      <PasswordFormInput
        label="Password"
        containerClassName="mb-4"
        name="password"
        labelClassName="block text-base/normal text-zinc-200"
        placeholder="Enter your password"
        fullWidth
        className="block w-full rounded border-white/10 bg-transparent py-2.5 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
        control={control}
      />
      <div className="mb-6 flex flex-wrap items-center justify-between gap-x-1 gap-y-2">
        <div className="inline-flex items-center">
          <input
            type="checkbox"
            className="size-4 rounded border-white/20 bg-white/20 text-primary shadow-sm focus:border-primary focus:ring focus:ring-primary/60 focus:ring-offset-0"
            id="checkbox-signin"
          />
          <label
            className="ms-2 select-none align-middle text-base/none text-zinc-200"
            htmlFor="checkbox-signin"
          >
            Remember me
          </label>
        </div>
      </div>
      <div className="text-center">
        <button
          className="group mt-5 inline-flex w-full items-center justify-center rounded bg-primary px-6 py-2.5 text-white backdrop-blur-2xl transition-all hover:bg-primary-700 hover:text-white"
          type="submit"
        >
          Register
        </button>
      </div>
    </form>
  )
}

export default SignUpForm
