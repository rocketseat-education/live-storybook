import React from 'react';

import { storiesOf } from '@storybook/react';
import { FaCheckCircle } from 'react-icons/fa';

import Modal from '../../src/components/Modal';
import Button from '../../src/components/Button';

storiesOf('Components|Modal', module)
  .add(
    'with success message and icon',
    () => (
      <Modal
        open
        icon={<FaCheckCircle size={48} color="#04D361" />}
        title={`Bem-vindo a Rocketseat,\nCláudio Orlandi`}
        success
        closeAction={() => {}}
      >
        <p>
          Esse é um modal para uma mensagem de sucesso e contém um ícone para
          reforçar a mensagem.
        </p>
        <footer>
          <p>
            Este é o footer do modal que pode conter uma informação adicional.
          </p>
        </footer>
      </Modal>
    ),
    {
      info: {
        text:
          'O modal utiliza dois childrens, sendo o segundo sempre um footer',
      },
    }
  )
  .add('with footer buttons', () => (
    <Modal
      open
      title="Modal com Botões de Ação"
      footerButtons
      closeAction={() => {}}
    >
      <p>
        Esse modal contém uma prop para estilizar a posição dos botões no footer
        do modal.
      </p>
      <footer>
        <Button secondary onClick={() => {}}>
          Cancelar
        </Button>
        <Button onClick={() => {}}>Entrar</Button>
      </footer>
    </Modal>
  ));
