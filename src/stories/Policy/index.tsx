import React, { useState } from 'react';

// storybook components
import { ModalFooter } from '../Modal/ModalFooter';

// json data
import terms01Json from '../assets/json/terms-01.json';
import terms02Json from '../assets/json/terms-02.json';
import terms03Json from '../assets/json/terms-03.json';

interface PolicyProps {
  viewport: string;
}

export const Policy = ({ viewport }: PolicyProps) => {
  const [showModal, setShowModal] = useState(false);
  const [title01, setTitle01] = useState('');
  const [title02, setTitle02] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState({});

  const handleClickLinkText = (num: number) => {
    setShowModal(true);
    switch (num) {
      case 1: {
        setTitle01('Terms &');
        setTitle02('Conditions');
        setDescription(
          'For the purpose of industry regulation, you are required to read & accept our Terms & conditions.'
        );
        setContent(terms01Json);
        break;
      }
      case 2: {
        setTitle01('Privacy');
        setTitle02('Policy');
        setDescription(
          'For the purpose of industry regulation, you are required to read & accept our Privacy Policy.'
        );
        setContent(terms02Json);
        break;
      }
      case 3: {
        setTitle01('Copyright');
        setTitle02('Policy');
        setDescription(
          'For the purpose of industry regulation, you are required to read & accept our Copyright Policy.'
        );
        setContent(terms03Json);
        break;
      }
      default:
        break;
    }
  };
  return (
    <div className='w-full flex flex-wrap justify-center items-center'>
      <div className='w-full p-5'>
        <div className='w-full flex justify-between'>
          <div className='font-primary-regular font-black-color text-sm'>Terms & Conditions</div>
          <div
            className='font-primary-regular font-green-color text-sm cursor-pointer'
            onClick={() => handleClickLinkText(1)}
            onKeyDown={() => handleClickLinkText(1)}
            role='button'
            tabIndex={0}
          >
            View all
          </div>
        </div>
      </div>
      <div className='w-full p-5'>
        <div className='w-full flex justify-between'>
          <div className='font-primary-regular font-black-color text-sm'>Privacy Policy</div>
          <div
            className='font-primary-regular font-green-color text-sm cursor-pointer'
            onClick={() => handleClickLinkText(2)}
            onKeyDown={() => handleClickLinkText(2)}
            role='button'
            tabIndex={0}
          >
            View all
          </div>
        </div>
      </div>
      <div className='w-full p-5'>
        <div className='w-full flex justify-between'>
          <div className='font-primary-regular font-black-color text-sm'>Copyright Policy</div>
          <div
            className='font-primary-regular font-green-color text-sm cursor-pointer'
            onClick={() => handleClickLinkText(3)}
            onKeyDown={() => handleClickLinkText(3)}
            role='button'
            tabIndex={0}
          >
            View all
          </div>
        </div>
      </div>

      <ModalFooter
        viewport={viewport}
        open={showModal}
        close={(bool: boolean) => setShowModal(bool)}
        title01={title01}
        title02={title02}
        description={description}
        content={content}
      />
    </div>
  );
};
