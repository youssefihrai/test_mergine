import { Layout } from "react-admin";
import { CustomMenu } from "../menu/CustomMenu";

export const CustomLayout = (props) => <Layout {...props} menu={CustomMenu} />;
