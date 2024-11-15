'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from 'next/image'
import { Github, Linkedin, Mail, Twitter, Youtube, ArrowRight, MapPin, Cloud, Video, GraduationCap, Award, FileCode, GitBranch, Shield, Zap, DollarSign, PlaneTakeoff, Box, Activity } from 'lucide-react'

export function FinalPortfolio() {
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  const certifications = [
    { name: "AWS Certified Solutions Architect - Professional", logo: "https://cdn.enescetinkaya.net/sapro_badge.png" },
    { name: "AWS Certified DevOps Engineer - Professional", logo: "https://cdn.enescetinkaya.net/devopspro_badge.png" },
    { name: "FinOps Certified Practitioner", logo: "https://enescetinkaya.net/assets/images/finops_badge.png" },
    { name: "CKA: Certified Kubernetes Administrator", logo: "https://cdn.enescetinkaya.net/cka_badge.png" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <motion.header 
        style={{ opacity: headerOpacity }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold text-blue-600">EC</span>
            <a href="https://superpeer.com/enescetinkaya" target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                Book a Call
                <Video className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </nav>
        </div>
      </motion.header>

      <main className="pt-16">
        <section className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
                    Platform
                    <span className="block text-blue-600">
                      Engineer
                    </span>
                  </h1>
                  <p className="text-xl text-gray-600">
                    AWS Community Builder | DevOpsTR Core Member
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="h-[1px] w-12 bg-gray-300"></div>
                  <span className="text-gray-500 uppercase text-sm tracking-wider">Based in Latvia</span>
                </div>

                <div className="flex space-x-4">
                  {[
                    { Icon: Twitter, link: "https://twitter.com/YOUR_TWITTER_USERNAME" },
                    { Icon: Github, link: "https://github.com/YOUR_GITHUB_USERNAME" },
                    { Icon: Linkedin, link: "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME" },
                    { Icon: Youtube, link: "https://www.youtube.com/YOUR_YOUTUBE_CHANNEL" },
                    { Icon: Mail, link: "mailto:YOUR_EMAIL@example.com" },
                    { Icon: Video, link: "https://superpeer.com/enescetinkaya" }
                  ].map(({ Icon, link }, i) => (
                    <a key={i} href={link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-colors">
                        <Icon className="h-5 w-5" />
                        <span className="sr-only">Social media link</span>
                      </Button>
                    </a>
                  ))}
                </div>
              </div>

              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <Image
                  src="https://cdn.enescetinkaya.net/enesconf.jpeg"
                  alt="Enes Cetinkaya"
                  width={384}
                  height={384}
                  className="rounded-3xl object-cover shadow-2xl w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-32 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Education & Certifications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white border-none p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <GraduationCap className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Riga Technical University</h3>
                    <p className="text-gray-600">Entrepreneurship and Management</p>
                    <p className="text-gray-500 mb-4">2023 | Riga, Latvia</p>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Specialized in technology management</li>
                      <li>Completed projects on cloud infrastructure optimization</li>
                      <li>Participated in international tech entrepreneurship programs</li>
                    </ul>
                  </div>
                </div>
              </Card>
              <Card className="bg-white border-none p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Award className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Professional Certifications</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex flex-col items-center text-center">
                        <Image 
                          src={cert.logo} 
                          alt={cert.name} 
                          width={80} 
                          height={80} 
                          className="object-contain mb-2" 
                        />
                        <p className="text-sm text-gray-600">{cert.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Areas of Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AWS Solutions Architecture",
                  icon: Cloud,
                  bgColor: "blue",
                  iconColor: "blue",
                  description: "Designing and implementing scalable, high-performance AWS cloud solutions."
                },
                {
                  title: "Cloud Migration & Optimization",
                  icon: PlaneTakeoff,
                  bgColor: "green",
                  iconColor: "green",
                  description: "Seamlessly migrating applications to AWS and optimizing cloud resources for cost-efficiency."
                },
                {
                  title: "DevOps & CI/CD",
                  icon: GitBranch,
                  bgColor: "pink",
                  iconColor: "pink",
                  description: "Implementing robust CI/CD pipelines and DevOps practices for faster, reliable deployments."
                },
                {
                  title: "Serverless & Microservices",
                  icon: Zap,
                  bgColor: "yellow",
                  iconColor: "yellow",
                  description: "Building modern, scalable applications using AWS Lambda and microservices architecture."
                },
                {
                  title: "Infrastructure as Code",
                  icon: FileCode,
                  bgColor: "purple",
                  iconColor: "purple",
                  description: "Automating infrastructure deployment and management using tools like AWS CloudFormation and Terraform."
                },
                {
                  title: "Cloud Security & Compliance",
                  icon: Shield,
                  bgColor: "red",
                  iconColor: "red",
                  description: "Implementing robust security measures and ensuring compliance with AWS best practices."
                },
                {
                  title: "Containerization & Orchestration",
                  icon: Box,
                  bgColor: "indigo",
                  iconColor: "indigo",
                  description: "Leveraging Docker and Kubernetes for efficient application deployment and scaling on AWS."
                },
                {
                  title: "Monitoring & Observability",
                  icon: Activity,
                  bgColor: "teal",
                  iconColor: "teal",
                  description: "Implementing comprehensive monitoring and logging solutions using AWS CloudWatch and other tools."
                },
                {
                  title: "Cost Management",
                  icon: DollarSign,
                  bgColor: "green",
                  iconColor: "green",
                  description: "Optimizing AWS costs through efficient resource allocation, rightsizing, and FinOps practices."
                }
              ].map((item, index) => (
                <Card key={index} className="bg-white border-none p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-full bg-${item.bgColor}-100 flex items-center justify-center`}>
                      <item.icon className={`h-6 w-6 text-${item.iconColor}-600`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-32 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Ready to Innovate?</h2>
              <p className="text-xl text-gray-600">Let&apos;s collaborate and build something amazing together.</p>
              <a href="https://superpeer.com/enescetinkaya" target="_blank" rel="noopener noreferrer">
                <Button className="mt-8 bg-blue-600 text-white hover:bg-blue-700 transition-colors text-lg px-8 py-3">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">&#169; 2023 Enes Çetinkaya. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="text-gray-500">Riga, Latvia</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}