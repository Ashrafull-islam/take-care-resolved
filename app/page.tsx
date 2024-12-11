import Faq_Section from "./Components/Home/Faq_Section";
import Home_Container from "./Components/Home/Home_Container";
import HyPnobirthing from "./Components/Home/HyPnobirthing";
import Practitioner from "./Components/Home/Practitioner";
import Card from "./Components/Home/Card";
import Form from "./Components/Home/Form";

export default function Home() {
  return (
    <div>
      <Home_Container></Home_Container>
      <HyPnobirthing></HyPnobirthing>
      <Practitioner></Practitioner>
      <Faq_Section></Faq_Section>
      <Card></Card>
      <Form></Form>
    </div>
  );
}
