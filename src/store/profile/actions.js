export const profileActionTypes = {
    SET_PROFILE: 'PROFILE.SET_PROFILE'
}

export const profileAction = {
    setProfile: (data) => ({type: profileActionTypes.SET_PROFILE, payload: data})
}