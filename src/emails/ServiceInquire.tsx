import {
    Button,
    Html,
    Heading,
    Body,
    Container,
    Tailwind,
    pixelBasedPreset,
    Section,
    Text,
    Row,
    Preview,
    Hr,
    bgcolorFromHex,
    TextColor
} from "react-email";

export const ServiceInquireEmail = ({
    name,
    email,
    phone,
    projectType,
    message,
}: {
    name: string;
    email: string;
    phone: string;
    projectType: string;
    message: string;
}) => {
    return (
        <Html>
            <Tailwind
                config={{
                    presets: [pixelBasedPreset],
                    theme: {
                        extend: {
                            colors: {
                                brand: "#1A2744",
                                offwhite: "#fafbfc",
                                accent: "#C9A962",
                                slate: "#6B7280",
                                charcoal: "#2D2D2D",
                                lightBorder: "#E5E7EB",
                                bgWarm: "#F8F9FA",
                            },
                            spacing: {
                                0: "0px",
                                20: "20px",
                                30: "30px",
                                40: "40px",
                                45: "45px",
                                60: "60px",
                                80: "80px",
                                100: "100px",
                            },
                        },
                    },
                }}
            >
                {/* ── Preview text ── */}
                <Preview className="text-sm text-slate opacity-60 text-center">
                    Apex Builders · Service Inquiry
                </Preview>

                {/* ── Body ── */}
                <Body className="bg-offwhite font-sans mb-100">
                    <Container className="mx-auto" style={{ maxWidth: "600px" }}>

                        {/* ── Header strip: navy band with gold accent line ── */}
                        <Section className="bg-brand">
                            <Row className="mx-20 mt-16 mb-8">
                                <Text className="text-center">
                                    <span
                                        className="text-[16px] tracking-widest uppercase text-accent font-sans font-500"
                                        style={{ letterSpacing: "3px" }}
                                    >
                                        Apex Builders
                                    </span>
                                </Text>
                                <Row className="mt-16">
                                    <Hr className="w-16 mx-auto" style={{ borderColor: "#C9A962", borderWidth: "1px", opacity: "0.8" }} />
                                </Row>
                            </Row>
                        </Section>

                        {/* ── Content area ── */}
                        <Container className="p-40">

                            {/* ── Service Inquiry heading ── */}
                            <Section className="text-brand text-center mt-16">
                                <Heading
                                    className="text-3xl font-serif font-bold tracking-tight leading-15"
                                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", color: "#1A2744" }}
                                >
                                    Service Inquiry
                                </Heading>
                                <Text className="text-center text-slate mt-3 text-base" style={{ color: "#6B7280", fontSize: "15px" }}>
                                    Thank you for reaching out. Here's the details of your inquiry.
                                </Text>
                            </Section>

                            {/* ── Thin gold divider ── */}
                            <Section className="mt-12 mb-16">
                                <Hr className="mx-auto" style={{ borderColor: "#C9A962", borderWidth: "0.5px", opacity: "0.55" }} />
                            </Section>

                            {/* ── Contact info block ── */}
                            <Section className="bg-white bg-opacity-60 rounded-sm p-30 mb-16" style={{ borderRadius: "4px" }}>
                                <Row className="mb-14">
                                    <Text className="text-brand text-base font-medium" style={{ fontWeight: "600", color: "#1A2744" }}>
                                        {name}
                                    </Text>
                                </Row>
                                <Row className="mb-8">
                                    <Text className="text-charcoal text-base" style={{ color: "#2D2D2D", fontSize: "15px" }}>
                                        {email}
                                    </Text>
                                </Row>
                                <Row className="mb-8">
                                    <Text className="text-charcoal text-base" style={{ color: "#2D2D2D", fontSize: "15px" }}>
                                        {phone}
                                    </Text>
                                </Row>
                                <Row>
                                    <Text className="text-accent text-sm uppercase tracking-wider mb-2" style={{ color: "#C9A962", fontSize: "11px", letterSpacing: "1.5px", fontWeight: "600" }}>
                                        Project Type
                                    </Text>
                                    <Text className="text-charcoal text-lg" style={{ color: "#2D2D2D", fontSize: "16px", fontWeight: "500" }}>
                                        {projectType} Project
                                    </Text>
                                </Row>
                            </Section>

                            {/* ── Message in quote style ── */}
                            <Section className="bg-white rounded-sm p-30 mb-16" style={{ borderRadius: "4px" }}>
                                <Text className="text-slate mb-6 italic" style={{ color: "#6B7280", fontSize: "15px", fontStyle: "italic" }}>
                                    "{message}"
                                </Text>
                            </Section>

                            {/* ── Reply CTA ── */}
                            <Section className="text-center">
                                <Button
                                    className="bg-accent font-inter text-brand font-600 inline-block border-none px-10 py-4 text-center text-brand cursor-pointer text-sm"
                                    style={{
                                        backgroundColor: "#C9A962",
                                        color: "#1A2744",
                                        borderRadius: "4px",
                                        padding: "14px 32px",
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        fontFamily: "Inter, sans-serif",
                                        textDecoration: "none",
                                    }}
                                >
                                    Reply to {name}
                                </Button>
                            </Section>

                        </Container>

                        {/* ── Footer ── */}
                        <Section className="text-center mt-40 mb-20">
                            <Text className="text-slate text-xs" style={{ color: "#6B7280", fontSize: "12px" }}>
                                Apex Builders · Construction & Development
                            </Text>
                        </Section>

                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

ServiceInquireEmail.defaultProps = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "(519) 226-1721",
    projectType: "Commercial",
    message:
        "We want to remove the carpet floors in our building and switch to wood flooring",
};

export default ServiceInquireEmail;
