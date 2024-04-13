import React from "react";
import { Box, Heading, Text, VStack, HStack, Divider, Container, Image, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.100" minHeight="100vh">
      {/* Header */}
      <Box bg="teal.500" py={8}>
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" color="white">
            Benjamin Harrison
          </Heading>
        </Container>
      </Box>

      <Container maxW="container.lg" py={12}>
        {/* About Section */}
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              About Me
            </Heading>
            <HStack spacing={8} alignItems="flex-start">
              <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3MTI5ODUzOTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Benjamin Harrison" borderRadius="full" boxSize="200px" />
              <Text fontSize="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel metus euismod, finibus odio ac, bibendum metus. Sed malesuada, libero sit amet aliquam malesuada, sapien sapien hendrerit augue, id faucibus ex nunc sit amet nulla.</Text>
            </HStack>
          </Box>

          <Divider />

          {/* Projects Section */}
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Projects
            </Heading>
            <VStack spacing={4} align="stretch">
              <Box p={4} bg="white" borderRadius="md" shadow="md">
                <Heading as="h3" size="lg" mb={2}>
                  Project 1
                </Heading>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Box>
              <Box p={4} bg="white" borderRadius="md" shadow="md">
                <Heading as="h3" size="lg" mb={2}>
                  Project 2
                </Heading>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Box>
              <Box p={4} bg="white" borderRadius="md" shadow="md">
                <Heading as="h3" size="lg" mb={2}>
                  Project 3
                </Heading>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Box>
            </VStack>
          </Box>

          <Divider />

          {/* Contact Section */}
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Contact Me
            </Heading>
            <Box p={6} bg="white" borderRadius="md" shadow="md">
              <FormControl id="name" mb={4}>
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Your name" />
              </FormControl>
              <FormControl id="email" mb={4}>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Your email" />
              </FormControl>
              <FormControl id="message" mb={4}>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Your message" />
              </FormControl>
              <Button colorScheme="teal" size="lg">
                Send Message
              </Button>
            </Box>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box bg="gray.200" py={8}>
        <Container maxW="container.lg">
          <HStack spacing={4} justifyContent="center">
            <FaGithub size={24} />
            <FaLinkedin size={24} />
            <FaEnvelope size={24} />
          </HStack>
          <Text mt={4} textAlign="center">
            &copy; {new Date().getFullYear()} Benjamin Harrison. All rights reserved.
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
