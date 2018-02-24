// export const resetUser = ({ email }) => {

//   return async (dispatch) => {
//     try {
//       await firebase.auth().sendPasswordResetEmail(email);
//       dispatch({
//         type: ERROR_SET,
//         payload: 'Reset Email Sent'
//       });
//     } catch (error) {
//       console.log(error);
//       let err_message = error.message;
//       dispatch({
//         type: ERROR_SET,
//         payload: err_message
//       });
//     }
//   };

// };