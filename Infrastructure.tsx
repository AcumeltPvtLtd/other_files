import React from 'react';
import { motion } from 'motion/react';
import { Factory, Cpu, Zap, Wind, ShieldCheck, Settings, Droplets, Layers, Flame, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/Layout';

const Infrastructure = () => {
  const machines = [
    {
      title: 'Vertical Turning Lathe (VTL)',
      subtitle: 'Vertical Turning ',
      icon: <Settings className="w-8 h-8" />,
      image: 'https://raw.githubusercontent.com/AcumeltPvtLtd/AcumeltPvtLtd.github.io/main/src/machine_shop1.jpg',
      specs: [
        { label: 'Max Turning Dia', value: '700 Millimeters' },
        { label: 'Max Turning Height', value: '700 Millimeters' },
        
       
      ]
    },
    {
      title: 'CNC Turning Lathe',
      subtitle: 'Horizontal Turning',
      icon: <Cpu className="w-8 h-8" />,
      image: 'https://raw.githubusercontent.com/AcumeltPvtLtd/AcumeltPvtLtd.github.io/main/src/machine_shop2.jpg',
      specs: [
        { label: 'Max Turning Dia', value: '250 Millimeters' },
        { label: 'Max Turning Length', value: '350 Millimeters' },
        
      ]
    },
    {
      title: 'Vertical Machining Center (VMC)',
      subtitle: 'Multi-Axis Milling',
      icon: <Settings className="w-8 h-8" />,
      image: 'https://acumelt.com/wp-content/uploads/2024/04/vmc-image-1.webp',
      specs: [
        { label: 'X-Axis Travel', value: '1000 Millimeters' },
        { label: 'Y-Axis Travel', value: '600 Millimeters' },
        { label: 'Z-Axis Travel', value: '600 Millimeters' },
        { label: 'Additional Capibilities ', value: '4th Axis Rotary Table ' }
      ]
    }
  ];

  const equipment = [
    {
      title: 'Melting System',
      subtitle: 'Inductotherm Duraline Tritrack Furnace',
      icon: <Zap className="w-8 h-8" />,
      image: 'https://acumelt.com/wp-content/uploads/2024/04/melting-image.webp',
      specs: [
        { label: 'Type', value: 'Medium Frequency Induction Melting' },
        { label: 'Converter', value: 'IGBT Converter' },
        { label: 'Crucible Capacity', value: '500 Kilograms (3 Independently Powered)' },
        { label: 'Converter Capacity', value: '1650 Kilowatts' },
        { label: 'Inverter Capacity', value: '550 Kilowatts each' },
        { label: 'Melting Capacity', value: '2.5 Metric Tons Per Hour' },
        { label: 'Features', value: 'Auto-sintering Cycles' }
      ]
    },
    {
      title: 'Molding Line',
      subtitle: 'Sinto FBO III A(N) ',
      icon: <Cpu className="w-8 h-8" />,
      image: 'https://acumelt.com/wp-content/uploads/2024/04/molding-image-1.webp',
      specs: [
        { label: 'Molding Method ', value: 'High Pressure Flaskless Molding ' },
        { label: 'Mold Size', value: '508 x 660 x 180-250 / 180-250 Millimeters (Length x Width x Height)' },
        { label: 'Output', value: '120 Molds Per Hour' },
        { label: 'Max Pouring Weight', value: '50 Kilograms' },
        
      ]
    },
    {
      title: 'Sand Plant',
      subtitle: 'Savelli ',
      icon: <Droplets className="w-8 h-8" />,
      image: 'https://acumelt.com/wp-content/uploads/2024/04/Sand-plant-image-1.webp',
      specs: [
        { label: 'Capacity', value: '24 Metric Tonne Per Hour' },
        { label: 'Mixer', value: 'Savelli Intensive Mixer' },
        { label: 'Cooling', value: 'Savelli Multicooler' },
        { label: 'Rejection Control', value: 'Online Sand Testing With Batch Correction ' },
        { label: 'Operation Control', value: 'SCADA Control And Monitoring ' },
        { label: 'Storage', value: '100 Metric Tonne Silo' }
      ]
    },
    {
      title: 'Core Making',
      subtitle: 'Galaxy Machines & Core Dryer',
      icon: <Layers className="w-8 h-8" />,
      image: 'https://raw.githubusercontent.com/AcumeltPvtLtd/AcumeltPvtLtd.github.io/main/src/core_dreyer.jpg',
      specs: [
        { label: 'Process', value: 'Cold Box Process' },
        { label: 'Machine Capacity ', value: '10 Liters: Vertical & Horizontal  ' },
        
        { label: 'Core Dryer', value: 'Microwave Oven Core Dryer' },
        
        { label: 'Coating', value: 'Water/Alcohol Based' }
      ]
    },
    {
      title: 'Pouring System',
      subtitle: 'Shree Shakti Smart Autopour APS 500',
      icon: <Settings className="w-8 h-8" />,
      image: 'https://acumelt.com/wp-content/uploads/2024/04/pauring-system-image-1.webp',
      specs: [
        
        { label: 'Capacity', value: '500 Kilograms' },
        { label: 'Control', value: '4 Axis  CNC & Weight Control ' },
        { label: 'Inoculation', value: 'Weight Controlled in Stream Auto Inoculation' }
        
      ]
    },
    {
      title: 'Shotblasting',
      subtitle: 'Gostol TST VKP 1200x1600',
      icon: <ShieldCheck className="w-8 h-8" />,
      image: 'https://raw.githubusercontent.com/AcumeltPvtLtd/AcumeltPvtLtd.github.io/main/src/shot_blasting_machine.jpg',
      specs: [
        { label: 'Type', value: 'Continuous Overhead Rail,Y Type Overhead Rail' },
        { label: 'Hanger Capicity ', value: '1 Meteric Ton Each ' },
        { label: 'Abrasive Speed ', value: ' 80 Meters Per Second' },
        { label: 'Abrasive Flow ', value: ' 270 Kg Per Minute' }
        
      ]
    },
    {
      title: 'Automatic Fettling',
      subtitle: 'High-Speed Precision',
      icon: <Settings className="w-8 h-8" />,
      image: 'https://raw.githubusercontent.com/AcumeltPvtLtd/AcumeltPvtLtd.github.io/main/src/auto_fettling_machine.jpg',
      specs: [
        { label: 'Process', value: 'Automatic Grinding & Finishing' },
        { label: 'Consistency', value: 'High Dimensional Accuracy' },
        { label: 'Surface Finish', value: 'Superior & Uniform' },
        { label: 'Batch Control', value: 'Automated Cycle Management' }
      ]
    }
  ];

  const environmental = [
    {
      title: 'Dust Extraction',
      subtitle: 'Neoairtech Systems',
      icon: <Wind className="w-6 h-6" />,
      features: [
        'Neoairtech Dust Extraction system with cassette filters',
        'Separate Filtration systems for Sand Plant, Sand Multicooler and Shotblasting Machine',
        'Guaranteed emission: < 20 mg/Nm3',
        'IP 55 rated equipment for outdoor application',
        'BAT (Best Available Technique) compliant equipment'
      ]
    },
    {
      title: 'Fume Extraction',
      subtitle: 'Techflow Enterprises',
      icon: <Wind className="w-6 h-6" />,
      features: [
        'Bag filtration system for fume treatment',
        'Guaranteed Emission: < 50 mg/m3',
        'Spark Arrestor included to avoid fire hazards',
        'Compliant with The Environment (Protection) Rules, 1986'
      ]
    }
  ];

  const treatments = [
    {
      title: 'Paint Shop',
      subtitle: 'Surface Treatment',
      icon: <Droplets className="w-10 h-10" />,
      image: 'https://raw.githubusercontent.com/AcumeltPvtLtd/AcumeltPvtLtd.github.io/main/src/paint_shop.jpg',
      desc: 'Multi-stage automated paint process including degreasing, phosphating, and high-quality liquid painting to ensure superior corrosion resistance.',
      features: [
        '7-Tank Pre-treatment',
        'Liquid Painting Arrangement ',
        'Powder Coating Arrangement ',
        'Forced Drying System',
        
      ]
    },
    {
      title: 'Heat Treatment',
      subtitle: 'Thermal Treatment',
      icon: <Flame className="w-10 h-10" />,
      image: 'https://raw.githubusercontent.com/AcumeltPvtLtd/AcumeltPvtLtd.github.io/main/src/heat_treatment_plant.jpg',
      desc: 'Dedicated heat treatment plant for Austempered Ductile Iron (ADI) and other specialized thermal processes to enhance mechanical properties.',
      features: [
        'Austempering',
        'Annealing & Normalizing',
        'Stress Relieving',
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Foundry Infrastructure" title="State-of-the-Art Manufacturing" centered />
        
        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          {equipment.map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[3rem] overflow-hidden hover:border-brand-orange/30 transition-all duration-500"
            >
              <div className="flex flex-col">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-100 dark:opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-zinc-50 dark:from-zinc-950 to-transparent" />
                </div>
                <div className="p-10 flex flex-col items-center text-center">
                  <div className="w-full">
                    <div className="text-brand-orange mb-6 flex justify-center">{item.icon}</div>
                    <h4 className="text-2xl font-bold text-zinc-950 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-zinc-500 dark:text-zinc-500 text-sm font-black uppercase tracking-widest mb-8">{item.subtitle}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                      {item.specs.map(spec => (
                        <div key={spec.label} className="flex flex-col items-center gap-2 text-sm border-b border-zinc-200 dark:border-zinc-800 pb-4">
                          <span className="text-zinc-500 dark:text-zinc-500 font-bold uppercase tracking-widest text-[10px] leading-none">{spec.label}</span>
                          <span className="text-zinc-800 dark:text-zinc-200 font-medium leading-tight">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mb-32">
          <SectionHeading subtitle="Advanced Capabilities" title="Precision Machining & Finishing" centered />
          <div className="grid lg:grid-cols-2 gap-12">
            {machines.map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[3rem] overflow-hidden hover:border-brand-orange/30 transition-all duration-500"
              >
                <div className="flex flex-col">
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-100 dark:opacity-90"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-zinc-50 dark:from-zinc-950 to-transparent" />
                  </div>
                  <div className="p-10 flex flex-col items-center text-center">
                    <div className="w-full">
                      <div className="text-brand-orange mb-6 flex justify-center">{item.icon}</div>
                      <h4 className="text-2xl font-bold text-zinc-950 dark:text-white mb-2">{item.title}</h4>
                      <p className="text-zinc-500 dark:text-zinc-500 text-sm font-black uppercase tracking-widest mb-8">{item.subtitle}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        {item.specs.map(spec => (
                          <div key={spec.label} className="flex flex-col items-center gap-2 text-sm border-b border-zinc-200 dark:border-zinc-800 pb-4">
                            <span className="text-zinc-500 dark:text-zinc-500 font-bold uppercase tracking-widest text-[10px] leading-none">{spec.label}</span>
                            <span className="text-zinc-800 dark:text-zinc-200 font-medium leading-tight">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-32">
          <SectionHeading subtitle="Advanced Capabilities" title="Surface & Thermal Treatment" centered />
          <div className="grid lg:grid-cols-2 gap-12">
            {treatments.map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[3rem] overflow-hidden hover:border-brand-orange/30 transition-all duration-500"
              >
                <div className="flex flex-col">
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-100 dark:opacity-90"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-zinc-50 dark:from-zinc-950 to-transparent" />
                  </div>
                  <div className="p-10 flex flex-col items-center text-center">
                    <div className="w-full">
                      <div className="text-brand-orange mb-6 flex justify-center">{item.icon}</div>
                      <h4 className="text-2xl font-bold text-zinc-950 dark:text-white mb-2">{item.title}</h4>
                      <p className="text-zinc-500 dark:text-zinc-500 text-sm font-black uppercase tracking-widest mb-6">{item.subtitle}</p>
                      <p className="text-zinc-600 dark:text-zinc-400 text-base font-light leading-relaxed mb-8 max-w-md mx-auto">
                        {item.desc}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left w-full max-w-xl mx-auto">
                        {item.features.map(p => (
                          <li key={p} className="flex items-center gap-3 text-zinc-950 dark:text-white font-bold text-sm">
                            <CheckCircle2 className="text-brand-orange w-5 h-5 shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-32">
          <SectionHeading subtitle="Environment & Safety" title="Sustainable Manufacturing" centered />
          <div className="grid md:grid-cols-2 gap-12">
            {environmental.map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-12 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[3rem] group hover:border-brand-orange/30 transition-all text-center flex flex-col items-center"
              >
                <div className="p-5 bg-brand-orange/10 rounded-2xl w-fit text-brand-orange mb-8 group-hover:bg-brand-orange group-hover:text-zinc-950 transition-all">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold text-zinc-950 dark:text-white mb-4">{item.title}</h4>
                <p className="text-zinc-500 dark:text-zinc-500 text-sm font-black uppercase tracking-widest mb-8">{item.subtitle}</p>
                <ul className="space-y-4 text-left w-full max-w-md mx-auto">
                  {item.features.map(p => (
                    <li key={p} className="flex items-start gap-4 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                      <CheckCircle2 className="text-brand-orange w-5 h-5 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Infrastructure;
