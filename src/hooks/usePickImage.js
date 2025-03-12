import { launchImageLibrary } from 'react-native-image-picker';
import { Alert } from 'react-native';

export const usePickImage = () => {
    const pickImage = async () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
        };

        const result = await launchImageLibrary(options);

        if (result.didCancel) {
            return null;
        }
        if (result.errorCode) {
            Alert.alert('Error', result.errorMessage || 'An error occurred while picking the image.');
            return null;
        }
        if (result.assets && result.assets.length > 0) {
            return result.assets[0].uri;
        }
        return null;
    };

    return { pickImage };
};
