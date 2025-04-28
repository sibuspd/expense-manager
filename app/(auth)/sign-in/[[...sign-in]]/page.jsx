import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mt-0 flex flex-col items-center w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
      <div
        className="hidden bg-cover lg:block lg:w-1/2"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')",
        }}
      ></div>

      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div className="flex justify-center mx-auto">
          <img
            className="w-auto h-7 sm:h-8"
            src="./logo.svg"
            alt="Zen expenses logo"
          />
        </div>
        <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200 ">
          Please Login to access Dashboard
        </p>
      </div>
      <SignIn/>
    </div>
  );
}
