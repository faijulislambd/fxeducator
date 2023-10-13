import InputButton from "@/components/utils/InputButton";

const LoginPage = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-amber-500 p-20 relative">
      <div className="w-2/3 md:w-2/5 rounded-lg p-12 backdrop-blur-xl bg-white/30">
        <form>
          <div className="flex flex-col space-y-3 mb-4">
            <label className="text-xl font-medium">Email</label>
            <input
              type="email"
              placeholder="john@email.com"
              className="p-2 rounded-md focus-visible:outline-none text-lg"
            />
          </div>
          <div className="flex flex-col space-y-3 mb-4">
            <label className="text-xl font-medium">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="p-2 rounded-md focus-visible:outline-none text-lg"
            />
          </div>

          <InputButton value="Login" className="px-8 mt-4"></InputButton>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
