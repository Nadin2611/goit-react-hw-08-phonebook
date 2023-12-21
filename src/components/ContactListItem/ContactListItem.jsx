import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import {
  ListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
  ButtonContainer,
  ContactContainer,
} from './ContactListItem.styled';
import { ContainerIcon } from 'components/Navigation/Navigation.styled';

export const ContactListItem = ({ name, number, onDelete }) => (
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
        Delete <DeleteOutlineOutlinedIcon />
      </DeleteButton>
    </ButtonContainer>
  </ListItem>
);
