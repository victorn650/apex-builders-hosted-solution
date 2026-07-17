import {
    Button,
    Html,
    Heading ,
    Body,
    Container,
    Tailwind,
    pixelBasedPreset,
    Section,
    Text,
    Row,
    Preview,
    Img
} from "react-email";

interface ServiceInquireEmailProps {
    name: string;
    email: string;
    projectType: string;
    message: string;
    phone: string;
};

export const ServiceInquireEmail = ({ name, email, projectType, message, phone }: ServiceInquireEmailProps) => {
    return (
        <Html>
            <Tailwind
                config={{
                presets: [pixelBasedPreset],
                theme: {
                    extend: {
                    colors: {
                        brand: '#1A2744',
                        offwhite: '#fafbfb',
                        accent: '#C9A962'
                    },
                    spacing: {
                        0: '0px',
                        20: '20px',
                        45: '45px',
                    },
                    },
                },
                }}
            >
                <Img
                    src="https://apex-builders-hosted-solution.revupdesigns.workers.dev/apex-logo-2.png"
                    alt="Apex"
                    className="mx-auto mt-5 mb-5 max-w-100 h-auto"
                />
                <Body className="bg-offwhite font-serif">
                    <Preview>Apex Builders Service Inquiry</Preview>
                    <Container className="bg-white p-45">
                        <Section className="bg-brand h-2">
                           <Heading className="my-8 text-center leading-8 text-white ">
                                Service Inquiry
                            </Heading>
                        </Section>
                        <Section className="text-brand">
                            <Row className="">
                                <Text>
                                    {name}
                                    <br />
                                    {email}
                                    <br />
                                    {phone}
                                </Text>
                            </Row>
                            <Row>
                                <Text className="text-lg">
                                    {name} is inquiring about a {projectType} project:
                                </Text>
                                <Text className="text-lg">
                                    "{message}"
                                </Text>
                                <Button
                                    className="bg-accent font-15 font-inter text-fg-inverted inline-block border-none px-5 py-3.5 text-center text-brand cursor-pointer"
                                >
                                    Reply to {name}
                                </Button>
                            </Row>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
};

ServiceInquireEmail.defaultProps = {
    name: 'John Doe',
    email: 'johndoe@streamify.com',
    phone: '(519) 226-1721',
    projectType: 'commercial',
    message: 'We want to remove the carpet floors in our building and switch to wood flooring'
};

export default ServiceInquireEmail;