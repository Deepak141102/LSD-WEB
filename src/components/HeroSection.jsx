import React from 'react';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden -z-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-full text-sm font-medium text-indigo-700">
              <Sparkles size={16} className="mr-2" />
              <span>Introducing our new platform</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Design with confidence and <span className="text-indigo-600">creativity</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl">
              Create stunning interfaces that captivate your audience and drive engagement with our intuitive design platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-gray-800 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition-all flex items-center justify-center">
                Get started
                <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow border border-gray-200 hover:bg-gray-50 transition-all">
                Learn more
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Zap size={20} className="text-amber-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">Lightning fast</h3>
                  <p className="mt-1 text-sm text-gray-500">Optimized for speed and performance</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Shield size={20} className="text-green-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">Secure by design</h3>
                  <p className="mt-1 text-sm text-gray-500">Enterprise-grade security built-in</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" 
                alt="Dashboard preview" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 rotate-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">98% Satisfaction</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 -rotate-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;