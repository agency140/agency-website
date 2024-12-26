import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import { getAnimationClass } from '../../utils/animations';

const team = [
  {
    name: 'Sarah Chen',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=300',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'David Park',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Emma Wilson',
    role: 'Design Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Michael Torres',
    role: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }
];

export function AboutTeam() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${getAnimationClass('fadeIn', isInView)}`}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            The talented people behind our success
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`text-center ${getAnimationClass('scaleIn', isInView, index * 100)}`}
            >
              <div className="relative group">
                <div className="aspect-square overflow-hidden rounded-2xl mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-gray-400 mb-4">{member.role}</p>
                <div className="flex justify-center gap-4">
                  <a href={member.social.twitter} className="text-gray-400 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.social.github} className="text-gray-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}