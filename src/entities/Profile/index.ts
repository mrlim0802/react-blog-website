import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { profileReducer } from './model/slice/profileSlice';
import { Profile, ProfileSchema } from './model/types/profileSchema';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export { ProfileSchema, Profile, profileReducer, fetchProfileData, ProfileCard };
