import { useTranslation } from 'react-i18next';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import {
  ListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
  EditButton,
  ButtonContainer,
  ContactContainer,
} from './ContactListItem.styled';
import { ContainerIcon } from 'components/Navigation/Navigation.styled';

export const ContactListItem = ({ name, number, onDelete }) => {
  const { t } = useTranslation();

  return (
    <ListItem>
      <ContactContainer>
        <ContactName>
          <ContainerIcon>
            <PersonOutlineOutlinedIcon />
            {name}
          </ContainerIcon>
        </ContactName>
        <ContactNumber>{number}</ContactNumber>
      </ContactContainer>

      <ButtonContainer>
        <DeleteButton onClick={onDelete}>
          {t('delete')} <DeleteOutlineOutlinedIcon />
        </DeleteButton>
        <EditButton>
          {t('edit')} <EditOutlinedIcon />
        </EditButton>
      </ButtonContainer>
    </ListItem>
  );
};
