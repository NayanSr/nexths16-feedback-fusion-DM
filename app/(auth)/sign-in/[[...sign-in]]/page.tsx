import { SignIn } from "@clerk/nextjs";
//  import { dark } from '@clerk/ui/themes'

export default function Page() {
  return (
    <div className="flex justify-center ">
      <SignIn />
    </div>
  );
}



// TODO: Not implement clerk theme