export type profilePropsType = {
    name: string;
};
const Profile = ({ name }: profilePropsType) => {
    return <div>Private profile components , name is {name}</div>;
};

export default Profile;
