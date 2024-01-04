'use client';

import { Button } from '@/components/ui/button';
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
import { FormSchema, MyAxiosError, MyAxiosSuccess } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import HeaderTitle from './headerTitle';
import Loader from './loader';
import { Checkbox } from './ui/checkbox';
import { useToast } from './ui/use-toast';
import { ToastAction } from './ui/toast';

interface Props {
 email: string;
 password: string;
}

const SignInForm = () => {
 const [variant, setVariant] = useState('login');
 const [error, setError] = useState<string | null>(null);
 const [success, setSuccess] = useState<string | null>(null);

 const form = useForm<z.infer<typeof FormSchema>>({
  resolver: zodResolver(FormSchema),
  defaultValues: {
   email: '',
   password: '',
   confirmPassword: undefined,
   terms: true,
  },
 });

 const { toast } = useToast();
 const isError = !form.formState.isValid;
 const isSubmitting = form.formState.isSubmitting;
 const isSuccess = form.formState.isSubmitted;

 const toggleVariant = useCallback(() => {
  setVariant((currentVariant) => {
   return currentVariant === 'login' ? 'register' : 'login';
  });
 }, []);

 const loginUser = useCallback(async ({ email, password }: Props) => {
  try {
   await signIn('credentials', { email, password, callbackUrl: '/' });
  } catch (error) {
   console.log(error);
  }
 }, []);

 const registerUser = useCallback(
  async ({ email, password }: Props) => {
   try {
    const response = await axios.post<MyAxiosSuccess>('/api/register', {
     email,
     password,
    });
    setSuccess('Signed In Successfully');
    toast({
     title: 'Registration Successful',
     description: 'You have successfully registered.',
    });
    console.log('success', response);
    setError(null);
   } catch (error) {
    const myError = error as MyAxiosError;
    const errorMessage =
     myError?.response?.data || 'An error occurred during registration';

    setError(errorMessage);
    toast({
     variant: 'destructive',
     title: 'Registration Failed',
     description: errorMessage,
    });
   }
  },
  [toast],
 );

 const onSubmit = async (values: z.infer<typeof FormSchema>) => {
  if (variant === 'register') {
   const { email, password } = values;
   await registerUser({ email, password });
  }
  if (variant === 'login') {
   const { email, password } = values;
   await loginUser({ email, password });
  }
 };

 return (
  <div className="h-screen w-full flex flex-col space-y-4 p-4 md:p-8 lg:p-12">
   <HeaderTitle title="Welcome Back 👋🏽" />

   <Button
    variant="outline"
    onClick={() => {
     toast({
      variant: 'destructive',
      title: 'Uh oh! Something went wrong.',
      description: 'There was a problem with your request.',
      action: <ToastAction altText="Try again">Try again</ToastAction>,
     });
    }}
   >
    Show Toast
   </Button>
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
         {isError && <FormMessage />}
        </FormItem>
       )}
      />

      {variant == 'register' ? (
       <FormField
        control={form.control}
        name="confirmPassword"
        render={({ field }) => (
         <FormItem>
          <FormLabel>Confirm Password</FormLabel>
          <FormControl>
           <Input
            type="password"
            className="placeholder:font-medium bg-gray-200 placeholder:text-c-neutral-cool-gray border-none text-c-primary-marine-blue"
            placeholder=" confirm password"
            {...field}
           />
          </FormControl>
          {isError && <FormMessage />}
         </FormItem>
        )}
       />
      ) : null}

      <FormField
       control={form.control}
       name="terms"
       render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 pt-5 space-y-0 rounded-md">
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
          {isError && <FormMessage />}
         </div>
        </FormItem>
       )}
      />
     </div>
     <Button disabled={isSubmitting} variant="gray" size="normal" type="submit">
      {isSubmitting ? (
       <Loader
        title={variant === 'login' ? 'Logging In' : 'Creating Your Account'}
        color="bg-transparent"
       />
      ) : variant == 'login' ? (
       'Sign In'
      ) : (
       'Register'
      )}
     </Button>
    </form>

    <span className="text-right text-sm gap-3 text-gray-600 mt-2">
     {variant == 'login' ? 'First Time Here?' : 'Already have an Account ?'}
     <span
      onClick={toggleVariant}
      className="text-blue-700 pl-2 capitalize text-[13px]"
     >
      {variant == 'login' ? 'create an account' : 'login here'}
     </span>
    </span>
   </Form>
  </div>
 );
};

export default SignInForm;
