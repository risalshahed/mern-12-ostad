const users = [
  {
    user: 1,
    presentAdd: {
      village: 'Charalgi',
      upazilla: '',
      district: 'Mymensingh'
    }
  },
  {
    user: 2,
    permanentAdd: {
      holdingNumber: '21-A',
      district: 'Cumilla'
    }
  },
  {
    user: 3,
    presentAdd: {
      holdingNumber: '21-A',
      district: 'Cumilla'
    },
    permanentAdd: {
      holdingNumber: '21-A',
      district: 'Cumilla'
    }
  },
]

users.map(user => user.presentAdd ? user.presentAdd.district : null)
// same as above
users.map(user => user.presentAdd?.district)