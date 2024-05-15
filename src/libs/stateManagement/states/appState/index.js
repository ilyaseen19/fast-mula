import React, {useState, useEffect} from 'react';
import Context from '../../context';
import {useNavigation} from '@react-navigation/native';
import {
  _getFromStorage,
  _getUserData,
  _removeFromStorage,
  _saveToStorage,
} from '../../../storage/system';
import {PermissionsAndroid, Alert} from 'react-native';
import Contacts from 'react-native-contacts';
import colors from '../../../../components/colors';

export default function AppState(props) {
  const navigation = useNavigation();

  const [user, setUser] = useState({
    loan: {
      loanStatus: 'Not applied',
      isApplied: false,
    },
    contacts: [],
    isRegistered: false,
    isVerified: false,
    registeration: 'id',
  });

  var today = new Date();
  const eighteenYearsAgo = today.setFullYear(today.getFullYear() - 18);

  const [inputFeilds, setInput] = useState({
    phone: '',
    dob: new Date(eighteenYearsAgo),
    code: '',
    idFront: null,
    idBack: null,
    firstName: '',
    lastName: '',
    middleName: '',
    gender: '',
    ghCard: '',
    inSchool: '',
    eduLevel: '',
    resiType: '',
    digAddressResi: '',
    areaResi: '',
    lnmkResi: '',
    resiTime: '',
    incomeSource: '',
    nRelCare: '',
    email: '',
    bPhone: '',
    mStatus: '',
    wkUnit: '',
    industType: '',
    wkAddress: '',
    compAddress: '',
    wkLnmk: '',
    wkHrs: '',
    mthInc: '',
    wkContent: '',
    emergContacts: {
      contact1: {name: '', phone: '', eduLevel: '', rele: ''},
      contact2: {name: '', phone: '', eduLevel: '', rele: ''},
      contact3: {name: '', phone: '', eduLevel: '', rele: ''},
    },
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // _getSysData();
    _getContacts();
    // _getLoc();
  }, []);

  const _getContacts = async () => {
    try {
      const AndroidPermision = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Fast Mula',
          message: 'Fast Mula needs to access your location',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (AndroidPermision === PermissionsAndroid.RESULTS.GRANTED) {
        Contacts.getAll()
          .then(contacts => {
            var cntcs = [];
            contacts.forEach(contact => {
              var name = contact.displayName;
              var number =
                contact.phoneNumbers.length !== 0
                  ? contact.phoneNumbers[0].number
                  : '';
              cntcs.push({name, number});
            });
            setUser({
              ...user,
              contacts: cntcs,
            });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        Alert.alert(
          'To use Fast Mula, you need to grant access to your contacts!',
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const routeWithProps = payload => {
    navigation.navigate(payload.path, {title: payload.title});
  };

  const _routeToPage = payload => {
    navigation.navigate(payload);
  };

  const _onChange = data => {
    const {field, value} = data;
    if (field === 'firstName')
      return setInput({
        ...inputFeilds,
        firstName: value,
      });

    if (field === 'lastName')
      return setInput({
        ...inputFeilds,
        lastName: value,
      });

    if (field === 'mName')
      return setInput({
        ...inputFeilds,
        middleName: value,
      });

    if (field === 'gender')
      return setInput({
        ...inputFeilds,
        gender: value,
      });

    if (field === 'ghCard')
      return setInput({
        ...inputFeilds,
        ghCard: value,
      });

    if (field === 'phone')
      return setInput({
        ...inputFeilds,
        phone: value,
      });

    if (field === 'dob')
      return setInput({
        ...inputFeilds,
        dob: value,
      });

    if (field === 'loanAmount-minus')
      return setNewLoan({
        ...newLoan,
        loanAmount:
          value === 200 || value === 300
            ? newLoan.loanAmount - 10
            : newLoan.loanAmount - 30,
      });

    if (field === 'loanAmount-plus')
      return setNewLoan({
        ...newLoan,
        loanAmount:
          value === 190 || value === 290
            ? newLoan.loanAmount + 10
            : newLoan.loanAmount + 30,
      });

    if (field === 'selectedContact')
      return setNewLoan({
        ...newLoan,
        paymentMethod: value,
      });

    if (field === 'code')
      return setInput({
        ...inputFeilds,
        code: value,
      });

    if (field === 'front')
      return setInput({
        ...inputFeilds,
        idFront: value,
      });

    if (field === 'back')
      return setInput({
        ...inputFeilds,
        idBack: value,
      });

    if (field === 'inSchool')
      return setInput({
        ...inputFeilds,
        inSchool: value,
      });

    if (field === 'eduLevel')
      return setInput({
        ...inputFeilds,
        eduLevel: value,
      });

    if (field === 'resiType')
      return setInput({
        ...inputFeilds,
        resiType: value,
      });

    if (field === 'digAddRes')
      return setInput({
        ...inputFeilds,
        digAddressResi: value,
      });

    if (field === 'areaResi')
      return setInput({
        ...inputFeilds,
        areaResi: value,
      });

    if (field === 'lnmkResi')
      return setInput({
        ...inputFeilds,
        lnmkResi: value,
      });

    if (field === 'resiTime')
      return setInput({
        ...inputFeilds,
        resiTime: value,
      });

    if (field === 'incSource')
      return setInput({
        ...inputFeilds,
        incomeSource: value,
      });

    if (field === 'nRel')
      return setInput({
        ...inputFeilds,
        nRelCare: value,
      });

    if (field === 'email')
      return setInput({
        ...inputFeilds,
        email: value,
      });

    if (field === 'bPhone')
      return setInput({
        ...inputFeilds,
        bPhone: value,
      });

    if (field === 'mStatus')
      return setInput({
        ...inputFeilds,
        mStatus: value,
      });

    if (field === 'unit')
      return setInput({
        ...inputFeilds,
        wkUnit: value,
      });

    if (field === 'indType')
      return setInput({
        ...inputFeilds,
        industType: value,
      });

    if (field === 'wkAddress')
      return setInput({
        ...inputFeilds,
        wkAddress: value,
      });

    if (field === 'compAdd')
      return setInput({
        ...inputFeilds,
        compAddress: value,
      });

    if (field === 'wkLnmk')
      return setInput({
        ...inputFeilds,
        wkLnmk: value,
      });

    if (field === 'wkHrs')
      return setInput({
        ...inputFeilds,
        wkHrs: value,
      });

    if (field === 'mtInc')
      return setInput({
        ...inputFeilds,
        mthInc: value,
      });

    if (field === 'content')
      return setInput({
        ...inputFeilds,
        wkContent: value,
      });

    if (field === 'emgCont') {
      if (data.type === 1) {
        if (data.ft === 'con')
          return setInput({
            ...inputFeilds,
            emergContacts: {
              ...inputFeilds.emergContacts,
              contact1: {
                ...inputFeilds.emergContacts.contact1,
                name: value.name,
                phone: value.number,
              },
            },
          });

        if (data.ft === 'edu')
          return setInput({
            ...inputFeilds,
            emergContacts: {
              ...inputFeilds.emergContacts,
              contact1: {
                ...inputFeilds.emergContacts.contact1,
                eduLevel: value,
              },
            },
          });

        if (data.ft === 'rel')
          return setInput({
            ...inputFeilds,
            emergContacts: {
              ...inputFeilds.emergContacts,
              contact1: {
                ...inputFeilds.emergContacts.contact1,
                rele: value,
              },
            },
          });
      }

      if (data.type === 2) {
        if (data.ft === 'con')
          return setInput({
            ...inputFeilds,
            emergContacts: {
              ...inputFeilds.emergContacts,
              contact2: {
                ...inputFeilds.emergContacts.contact2,
                name: value.name,
                phone: value.number,
              },
            },
          });

        if (data.ft === 'edu')
          return setInput({
            ...inputFeilds,
            emergContacts: {
              ...inputFeilds.emergContacts,
              contact2: {
                ...inputFeilds.emergContacts.contact2,
                eduLevel: value,
              },
            },
          });

        if (data.ft === 'rel')
          return setInput({
            ...inputFeilds,
            emergContacts: {
              ...inputFeilds.emergContacts,
              contact2: {
                ...inputFeilds.emergContacts.contact2,
                rele: value,
              },
            },
          });
      }

      if (data.type === 3) {
        if (data.ft === 'con')
          return setInput({
            ...inputFeilds,
            emergContacts: {
              ...inputFeilds.emergContacts,
              contact3: {
                ...inputFeilds.emergContacts.contact3,
                name: value.name,
                phone: value.number,
              },
            },
          });

        if (data.ft === 'edu')
          return setInput({
            ...inputFeilds,
            emergContacts: {
              ...inputFeilds.emergContacts,
              contact3: {
                ...inputFeilds.emergContacts.contact3,
                eduLevel: value,
              },
            },
          });

        if (data.ft === 'rel')
          return setInput({
            ...inputFeilds,
            emergContacts: {
              ...inputFeilds.emergContacts,
              contact3: {
                ...inputFeilds.emergContacts.contact3,
                rele: value,
              },
            },
          });
      }

      return;
    }

    if (field === 'repaymentPeriod')
      return setNewLoan({
        ...newLoan,
        loanRepaymentPeriod: value,
      });

    if (field === 'useLoan')
      return setNewLoan({
        ...newLoan,
        useLoan: value,
      });

    if (field === 'wheard')
      return setNewLoan({
        ...newLoan,
        wHeard: value,
      });

    if (field === 'paymentMethod')
      return setSystem({
        ...system,
        paymentMethod: value,
      });

    if (field === 'paymentEmail')
      return setSystem({
        ...system,
        paymentEmail: value,
      });

    if (field === 'ntOp')
      return setSystem({
        ...system,
        networkOperator: value,
      });

    if (field === 'selfieIm') {
      setNewLoan({
        ...newLoan,
        selfie: value,
      });

      return;
    }

    if (field === 'repAmount') {
      setRepay({
        ...repay,
        payAmount: value,
      });

      return;
    }

    if (field === 'repPh') {
      setRepay({
        ...repay,
        paymentMethod: value,
      });

      return;
    }

    if (field === 'actN') {
      setRepay({
        ...repay,
        accountName: value,
      });

      return;
    }

    if (field === 'oprt') {
      setRepay({
        ...repay,
        ntwrkOperator: value,
      });

      return;
    }
  };

  const _goBack = () => {
    navigation.goBack();
  };

  const _handleIdInfo = () => {
    setUser({
      ...user,
      registeration: "personal"
    })
  }
  
  const _handlePesInfo = () => {
    setUser({
      ...user,
      registeration: "work"
    })
  }
  
  const _hadnleWorkInfo = () => {
    setUser({
      ...user,
      registeration: "emgcont"
    })
  }

  const _handleRegister = () => {
    _routeToPage("Main")
  }

  return (
    <Context.Provider
      value={{
        colors,
        loading,
        user,
        inputFeilds,
        _onChange,
        routeWithProps,
        _routeToPage,
        _goBack,
        _getContacts,
        _handleIdInfo,
        _handlePesInfo,
        _hadnleWorkInfo,
        _handleRegister
      }}>
      {props.children}
    </Context.Provider>
  );
}
