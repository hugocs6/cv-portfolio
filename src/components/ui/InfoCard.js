// components/ui/InfoCard.js
const InfoCard = ({ title, content }) => {
    return (
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-300">{content}</p>
      </div>
    );
  };
  
  export default InfoCard;