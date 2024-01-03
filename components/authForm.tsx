'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
 Form,
 FormControl,
 FormDescription,
 FormField,
 FormItem,
 FormLabel,
 FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import HeaderTitle from './headerTitle';
import { Checkbox } from './ui/checkbox';
const FormSchema = z.object({
 email: z.string().min(1, 'Email is required').email('Invalid email'),
 password: z
  .string()
  .min(1, 'Password is required')
  .min(8, 'Password must have than 8 characters'),
 confirmPassword: z
  .string()
  .min(1, 'Password is required')
  .min(8, 'Password must have than 8 characters'),
 terms: z.boolean().default(false),

 //  confirmPassword: z
 //   .string()
 //   .min(1, 'Confirm Password is required')
 //   .min(8, 'Confirm Password must have than 8 characters'),
});

const SignInForm = () => {
 const form = useForm<z.infer<typeof FormSchema>>({
  resolver: zodResolver(FormSchema),
  defaultValues: {
   email: '',
   password: '',
   confirmPassword: '',

   terms: false,
   //  confirmPassword: '',
  },
 });

 const onSubmit = (values: z.infer<typeof FormSchema>) => {
  console.log(values);
 };

 return (
  <div className="h-screen w-full space-y-4 p-4 md:p-8 lg:p-12">
   <HeaderTitle title="Welcome Back 👋🏽" />

   <Form {...form}>
    <form
     onSubmit={form.handleSubmit(onSubmit)}
     className="flex flex-col gap-6"
    >
     <div className="space-y-4">
      <FormField
       control={form.control}
       name="email"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Email</FormLabel>
         <FormControl>
          <Input
           className="placeholder:font-medium bg-gray-200 placeholder:text-c-neutral-cool-gray border-none text-c-primary-marine-blue"
           placeholder="mail@example.com"
           {...field}
          />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
      <FormField
       control={form.control}
       name="password"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Password</FormLabel>
         <FormControl>
          <Input
           type="password"
           className="placeholder:font-medium bg-gray-200 placeholder:text-c-neutral-cool-gray border-none text-c-primary-marine-blue"
           placeholder=" password"
           {...field}
          />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
      <FormField
       control={form.control}
       name="confirmPassword"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Password</FormLabel>
         <FormControl>
          <Input
           type="confirmPassword"
           className="placeholder:font-medium bg-gray-200 placeholder:text-c-neutral-cool-gray border-none text-c-primary-marine-blue"
           placeholder=" confirm password"
           {...field}
          />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />

      <FormField
       control={form.control}
       name="terms"
       render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
         <FormControl>
          <Checkbox
           checked={field.value}
           onCheckedChange={(value) => field.onChange(value)}
          />
         </FormControl>
         <div className="space-y-2 leading-none">
          <FormLabel className="text-[13px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
           Accept terms and conditions
          </FormLabel>
          <FormDescription className="text-[13px] text-muted-foreground">
           {`You agree to our Terms of Service and Privacy Policy.`}
          </FormDescription>
         </div>
        </FormItem>
       )}
      />
     </div>
     <Button variant="gray" size="normal" type="submit">
      Register{' '}
     </Button>
    </form>

    <p className="text-right text-sm gap-3 text-gray-600 mt-2">
     Already have an account?
     <Link
      className="text-blue-700 pl-2 capitalize text-[13px]"
      href="/sign-up"
     >
      Sign in
     </Link>
    </p>
   </Form>
  </div>
 );
};

export default SignInForm;
