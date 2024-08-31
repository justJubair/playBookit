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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const LoginPage = () => {
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
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    form.reset();
  }
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-l from-primaryYellow to-secondaryPink">
      <div>
        <h1 className="matemasie-regular text-center text-primaryYellow text-xl lg:text-6xl mb-12">
          Play<span className="text-secondaryPink">Bookit</span>
        </h1>
        <div className="max-w-96 mx-auto flex items-center justify-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="matemasie-regular text-primaryText">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="w-full border border-secondaryPink"
                        placeholder="email"
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
                    <FormLabel className="matemasie-regular text-primaryText">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="w-full border border-secondaryPink"
                        placeholder="password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <CustomButton type="submit">Login</CustomButton>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
