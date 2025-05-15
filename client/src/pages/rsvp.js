import { useParams } from "react-router";

const RsvpPage = () => {
    const { groupId } = useParams();
    return <div>RsvpPage for group {groupId}</div>
}

export default RsvpPage;