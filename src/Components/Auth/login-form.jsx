import { useState } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from 'react-router-dom';

import { auth, db } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export function LoginForm(props) {
  const { className, ...rest } = props;
  const [isLogin, setIsLogin] = useState(false); // false = Sign Up mode by default
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // Sign In logic
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        navigate('/dashboard');
      } else {
        // Sign Up logic
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "users", userCred.user.uid), {
          email: email,
          role: "user"
        });
        alert("Signup successful!");
        navigate('/dashboard');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-6", className)} {...rest}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">
          {isLogin ? 'Welcome back' : 'Create an account'}
        </h1>
        <p className="text-muted-foreground text-sm text-balance">
          {isLogin
            ? 'Enter your credentials to log in'
            : 'Enter your email below to create your account'}
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full">
          {isLogin ? 'Log In' : 'Sign Up'}
        </Button>
      </div>
      <div className="text-center text-sm">
        {isLogin ? (
          <>
            Don’t have an account?{' '}
            <button
              type="button"
              className="underline underline-offset-4"
              onClick={() => setIsLogin(false)}
            >
              Sign up
            </button>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <button
              type="button"
              className="underline underline-offset-4"
              onClick={() => setIsLogin(true)}
            >
              Log in
            </button>
          </>
        )}
      </div>
    </form>
  );
}

// Moved navigate inside a hook-safe wrapper below
export const handleSignout = (navigateFn) => {
  signOut(auth)
    .then(() => {
      alert("Signed out successfully!");
      navigateFn('/');
    })
    .catch((error) => {
      alert(error.message);
    });
};