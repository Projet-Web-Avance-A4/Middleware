"use client";
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import LegalModal from '../components/credits';

// Composant Footer (pied de page)
export default function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    //Open and close credits modal
    function openModal() {
      setIsModalOpen(true);
    }
  
    function closeModal() {
      setIsModalOpen(false);
    }
    
    return (
        <div className="text-black">
            <div className="grid bg-lightGreen py-4">
                <div className="grid flex justify-items-center">
                    <p className="font-bold">Contact</p>
                    <p>Vous souhaitez en savoir plus ou nous rencontrer ? </p>
                    <p> N'hésitez pas à nous contacter !</p>
                </div>
                <div className="grid justify-items-center ">
                    <div className="my-2 flex gap-5">
                        <a href="tel:#" title="Appeler ce numéro"  className="flex flex-row items-center space-x-2 gap-3">
                        <FaPhone className="text-red material-icons"/>
                                07 82 88 38 64
                        </a>
                        <a href="mailto:ceseat@gmail.com" title="Envoyer un email" className="flex flex-row items-center space-x-2 gap-3">
                        <FaEnvelope className="text-red material-icons" />
                            ceseat@gmail.com
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex bg-darkGreen py-2">
                <div className="flex-1">©CES'EAT - 2024</div>
                <div>
                <a
                    title="Consulter les mentions légales"
                    onClick={openModal}
                    className="cursor-pointer text-blue-500"
                >
                    <span>Mentions légales</span>
                </a>

                <LegalModal isOpen={isModalOpen} closeModal={closeModal} />
            </div>
            </div>
        </div>        
    );
}