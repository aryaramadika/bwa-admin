import { Meta} from "@storybook/react";
import TherapistStaff, {TherapistStaffProps} from "../../../../components/molecules/TherapistStaff";

export default {
    title: 'components/molecules/TherapistStaff',
    component:TherapistStaff,
}as Meta;

const Template = (args : TherapistStaffProps) => <TherapistStaff {...args} />;
export const Default = Template.bind({});
Default.args = {
    title:'Super Mechs',
    category:'Mobile',
    thumbnail:'/img/Thumbnail-1.png'
};