// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Mail, Phone, MapPin, Download, MessageCircle } from "lucide-react";

// const Contact = () => {
//   return (
//     <section className="py-20 bg-primary text-primary-foreground">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
//           <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
//           <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
//             Ready to discuss physics education opportunities, research collaborations, or academic partnerships
//           </p>
//         </div>
        
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
            
//             <div className="space-y-6">
//               <Card className="bg-blue-300 backdrop-blur-sm border-white/20 p-6">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
//                     <Mail className="w-6 h-6 text-accent-foreground" />
//                   </div>
//                   <div>
//                     <div className="font-semibold  text-sm">Email Address</div>
//                     <div className="text-lg font-medium">Azeemazeemi7861@gmail.com</div>
//                   </div>
//                 </div>
//               </Card>
              
//               <Card className="bg-blue-300 backdrop-blur-sm border-white/20 p-6">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
//                     <Phone className="w-6 h-6 text-accent-foreground" />
//                   </div>
//                   <div>
//                     <div className="font-semibold  text-sm">Phone Numbers</div>
//                     <div className="text-lg font-medium">+92-345-7775106</div>
//                     <div className="text-md">+92-300-0987336</div>
//                   </div>
//                 </div>
//               </Card>
              
//               <Card className="bg-blue-300 backdrop-blur-sm border-white/20 p-6">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
//                     <MapPin className="w-6 h-6 text-accent-foreground" />
//                   </div>
//                   <div>
//                     <div className="font-semibold text-sm">Location</div>
//                     <div className="text-lg font-medium">Faisalabad, Pakistan</div>
//                   </div>
//                 </div>
//               </Card>
//             </div>
//           </div>
          
//           <div>
//             <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
//               <h3 className="text-2xl font-bold text-primary-foreground mb-6">Let's Connect</h3>
//               <p className="text-primary-foreground/80 mb-8 leading-relaxed">
//                 Whether you're looking for an experienced physics educator, interested in research collaboration, 
//                 or seeking academic consultation, I'd love to hear from you. Let's discuss how we can work together 
//                 to advance physics education and research.
//               </p>
              
//               <div className="space-y-4">
//                             <a href="mailto:Azeemazeemi7861@gmail.com">
//               <Button 
//                 size="lg" 
//                 className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
//               >
//                 <MessageCircle className="w-5 h-5 mr-2" />
//                 Send Message
//               </Button>
//             </a>

                
//                                 <a 
//                   href="/prof azeem cv.pdf" 
//                   download 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                 >
//                   <Button 
//                     variant="outline" 
//                     size="lg"
//                     className="w-full mt-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-base font-semibold rounded-xl transition-all duration-300
//                     w-full border-primary-foreground/30 text--foreground hover:bg-blue-400 hover:text-black"
//                   >
//                 <Download className="w-5 h-5 mr-2" />
//                     Download CV
//                   </Button>
//                 </a>

//                 {/* <Button 
//                   variant="outline" 
//                   size="lg"
//                   className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
//                 >
//                   <Download className="w-5 h-5 mr-2" />
//                   Download Full CV
//                 </Button> */}
//               </div>
//             </Card>
//           </div>
//         </div>
        
//         <div className="mt-16 text-center">
//           <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 inline-block">
//             <h4 className="text-xl font-bold text-primary-foreground mb-4">References Available</h4>
//             <p className="text-primary-foreground/80">
//               Professional references and recommendations available upon request
//             </p>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">
            Ready to discuss physics education opportunities, research collaborations, or academic partnerships?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <Card className="bg-gray-100 border border-gray-200 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-600">Email Address</div>
                    <div className="text-lg font-semibold">Azeemazeemi7861@gmail.com</div>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-100 border border-gray-200 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-600">Phone Numbers</div>
                    <div className="text-lg font-semibold">+92-345-7775106</div>
                    <div className="text-md text-gray-700">+92-300-0987336</div>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-100 border border-gray-200 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-600">Location</div>
                    <div className="text-lg font-semibold">Faisalabad, Pakistan</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <Card className="bg-gray-50 border border-gray-200 p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Let's Connect</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Whether you're looking for an experienced physics educator, interested in research collaboration, 
                or seeking academic consultation, I'd love to hear from you. Let's discuss how we can work together 
                to advance physics education and research.
              </p>

              <div className="space-y-4">
                <a href="mailto:Azeemazeemi7861@gmail.com">
                  <Button 
                    size="lg" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </a>

                <a 
                  href="/prof azeem cv.pdf" 
                  download 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50  hover:text-blue-600 font-semibold"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>

        {/* Reference Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gray-100 border border-gray-200 inline-block px-6 py-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">References Available</h4>
            <p className="text-gray-700">
              Professional references and recommendations available upon request
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
