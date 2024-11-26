// import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
// import MyAccountForm from "@/forms/userProfileForms/MyAccountForm";

// const MyAccountPage = () => {
//   const { currentUser, isLoading: isGetLoading } =useGetMyUser();
//   const {updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

//   if (isGetLoading) {
//     return <span>Loading...</span>
//   }

//   if (!currentUser){
//     return <span>Unable to load user profile</span>
//   }

//   return <MyAccountForm currentUser= {currentUser} onSave={updateUser} isLoading={isUpdateLoading} />;
// }

// export default MyAccountPage;