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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const SignupPage = () => {
  const formSchema = z.object({
    name: z.string().min(2, { message: "This field has to be filled" }),
    phone: z.string(),
    address: z.string(),
    role: z.string(),
    email: z
      .string()
      .min(2, { message: "This field has to be filled" })
      .email("This is not a valid email"),
    password: z.string().min(2, { message: "This field has to be filled" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      role: "user",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    // form.reset();
  }
  return (
    <div>
      <Link
        to="/"
        className="absolute top-3 -left-1 matemasie-regular px-3 py-2 text-primaryYellow ml-2"
      >
        Play<span className="text-secondaryPink">Bookit</span>
      </Link>
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-full">
          <h1 className="matemasie-regular text-center text-primaryYellow text-xl lg:text-6xl mb-12">
            Register<span className="text-secondaryPink">now</span>
          </h1>
          <div className="max-w-[650px] px-4 mx-auto flex items-center justify-center">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 w-full"
              >
                <div className="flex flex-col lg:flex-row items-center w-full gap-2">
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="matemasie-regular text-gray-400">
                            Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="w-full flex-1 border bg-white/80 border-secondaryPink"
                              placeholder="name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full mt-2 lg:mt-0">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="matemasie-regular text-gray-400">
                            Phone
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="w-full flex-1 border bg-white/80 border-secondaryPink"
                              placeholder="phone"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-2">
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="matemasie-regular text-gray-400">
                            Address
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="w-full border bg-white/80 border-secondaryPink"
                              placeholder="address"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full mt-2 lg:mt-0">
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="matemasie-regular text-gray-400">
                            Role
                          </FormLabel>

                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full border border-secondaryPink bg-white/80">
                                <SelectValue placeholder="Select user role" />
                              </SelectTrigger>
                            </FormControl>

                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>User Role</SelectLabel>
                                <SelectItem value="user">user</SelectItem>
                                <SelectItem value="admin">admin</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col lg:flex-row items-center gap-2">
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="matemasie-regular text-gray-400">
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
                    </div>
                    <div className="w-full mt-2 lg:mt-0">
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
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between px-1">
                    <p className="font-bold text-sm">Don't have an account?</p>
                    <Link
                      to="/login"
                      className="font-bold text-sm underline text-secondaryPink"
                    >
                      Login
                    </Link>
                  </div>
                </div>

                <CustomButton type="submit">Register</CustomButton>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignupPage;
