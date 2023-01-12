import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useGetContactsQuery } from 'Store/contacts/contactsApi';
import { getContactsFilter } from 'Store/filterSlice';
export const useContacts = () => {
  const filter = useSelector(getContactsFilter);

  const selectFilteredContacts = useMemo(() => {
    return createSelector(
      [response => response.data, (_, filter) => filter],
      (contacts, filter) => {
        return (
          contacts??contacts?.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          ) ?? []
        );
      }
    );
  }, []);

  return useGetContactsQuery(undefined, {
    selectFromResult(result) {
      return {
        ...result,
        filteredContacts: selectFilteredContacts(result, filter),
      };
    },
  });
};