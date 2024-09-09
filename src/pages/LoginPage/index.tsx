import CustomButton from "@/components/CustomButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useLoginMutation } from "@/redux/feature/auth/authApi";
import { setUser } from "@/redux/feature/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const LoginPage = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const formSchema = z.object({
    email: z
      .string()
      .min(2, { message: "This field has to be filled" })
      .email("This is not a valid email"),
    password: z.string().min(2, { message: "This field has to be filled" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "joey@gmail.com",
      password: "pass123",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    try {
      const res = await login(values).unwrap();
      // console.log(res);
      const user = verifyToken(res?.token);
      dispatch(
        setUser({ user: user, token: res.token, userDetails: res.data })
      );
      toast({ title: "Logged in successfully", duration: 2000 });
      form.reset();
      navigate("/");
    } catch (err) {
      console.log(err);
      toast({
        title: "Something went wrong",
        variant: "destructive",
        duration: 2000,
      });
    }
  }

  return (
    <div>
      <Link
        to="/"
        className="absolute top-3 -left-1 matemasie-regular px-3 py-2 text-primaryYellow ml-2"
      >
        Play<span className="text-secondaryPink">Bookit</span>
      </Link>
      <div className="h-screen flex items-center justify-center bg-black">
        <div>
          <h1 className="matemasie-regular text-center text-primaryYellow text-3xl lg:text-6xl mb-7 lg:mb-12">
            Login<span className="text-secondaryPink">now</span>
          </h1>
          <div className="max-w-96 mx-auto flex items-center justify-center">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 w-full"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        className="matemasie-regular pt-9 mt-10
                     text-gray-400"
                      >
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="w-full border bg-white/80 border-secondaryPink"
                          placeholder="email"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="matemasie-regular text-gray-400">
                          Password
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="w-full border bg-white/80 border-secondaryPink"
                            placeholder="password"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="mt-2 flex items-center justify-between px-1">
                    <p className="font-medium text-sm text-white">
                      Don't have an account?
                    </p>
                    <Link
                      to="/signup"
                      className="font-bold text-sm underline text-secondaryPink"
                    >
                      Register
                    </Link>
                  </div>
                </div>

                <CustomButton type="submit">Login</CustomButton>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
