import notice from '../models/notice.model';

export const GetAllNotices = async (req, res) => {
    try {
        const notices = notice.find();
        res.status(200).json(notices);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
}

};
export const CreateNotice = (req, res) => {

    
};
