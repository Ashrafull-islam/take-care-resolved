import About_Container from "../Components/About/About_Container";
import Form from "../Components/Home/Form";
import Card_Section from "./Card_Section";
import Resources from "./Resources";

export default function Page(){
    return(
        <div>
        <About_Container></About_Container>
        <Card_Section></Card_Section>
        <Resources></Resources>
        <div className="md:my-40">
        <Form></Form>
        </div>
        </div>
    )}