import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Registration = () => {
  return (
    <Card className='w-full max-w-md mx-auto'>
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Create your new account.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className='grid gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='name'>Name</Label>
            <Input id='name' placeholder='Enter your name' required />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              type='password'
              placeholder='Enter a password'
              required
            />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='confirmPassword'>Confirm Password</Label>
            <Input
              id='confirmPassword'
              type='password'
              placeholder='Confirm your password'
              required
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type='submit' className='w-full'>
          Register
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Registration;
