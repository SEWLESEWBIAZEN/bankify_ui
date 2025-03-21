import RegisterForm from "@/app/_components/one-time/auth/registerForm";
import { getUserByid } from "@/app/_lib/data/users";


export default async function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  const user=await getUserByid(id)
  return (
      <div className="relative mx-auto flex w-full max-w-[600px] flex-col space-y-2.5 p-4 md:-mt-32">
          <RegisterForm user={user} edit={true}/>
      </div>
  );
}