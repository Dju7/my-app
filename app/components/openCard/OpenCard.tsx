'use client'
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'

export default function OpenCard() {
  const [selectedId, setSelectedId] = useState('');
  const items = [
    {
      id: '1',
      title: 'Site vitrine',
      subtitle: 'Portfolio, évènement... ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      additionalText: 'Additional content for Card 1.',
    },
    {
      id: '2',
      title: 'Site e-commerce',
      subtitle: 'Votre Boutique en ligne',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      additionalText: 'Additional content for Card 2.',
    },
    {
      id: '3',
      title: 'application métier',
      subtitle: 'SAAS, intra, CRM, application web...',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        additionalText: 'Additional content for Card 3.',
    },
    {
      id: '4',
      title: 'Refonte et missions diverses',
      subtitle: 'Mise a jour site perso, ajouts fonctionnalitées...',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        additionalText: 'Additional content for Card 4.',
    },
  ];

  return (
    <motion.div className="flex items-center justify-center min-h-full my-4">
      <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-4">
        {items.map((item) => (
          <motion.div
            className="group h-[400px] xl:h-[450px] w-[300px] 2xl:w-[350px] bg-secondary rounded-lg shadow-md cursor-pointer transform transition-transform duration-500 hover:scale-105 hover:bg-primary "
            layoutId={`${item.id}`}
            onClick={() => setSelectedId(item.id)}
            key={item.id}
            initial={{ scale: 1 }}
            animate={{ scale: selectedId === item.id ? 1.1 : 1 }} 
            transition={{ duration: 0.3 }}
          >
            <div className='p-2'>
              <motion.h2 className="text-xl font-bold mb-2 text-primary group-hover:text-secondary">{item.title}</motion.h2>
              <motion.h5 className="text-sm font-bold mb-1 text-fourth">{item.subtitle}</motion.h5>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {items.map((item) => (
              item.id === selectedId && (
                <motion.div
                  className="bg-secondary rounded-lg p-4 shadow-md  mx-auto h-[700px] w-[950px]"
                  layoutId={`${item.id}`}
                  key={item.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                >
                  <motion.div className="relative ">
                    <motion.button
                      className="absolute top-2 right-2 py-1 px-2 text-center text-black bg-red-500 rounded-full"
                      onClick={() => setSelectedId('')}
                    >
                      Close
                    </motion.button>
                    <motion.h2 className="text-xl font-bold mb-2 text-primary">{item.title}</motion.h2>
                    <motion.h5 className="text-sm font-bold mb-1 text-primary">{item.subtitle}</motion.h5>
                    <motion.p className="text-md text-primary mb-4">{item.description}</motion.p>
                    <motion.p
                      className="text-md text-gray-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {item.additionalText}
                    </motion.p>
                  </motion.div>
                </motion.div>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

