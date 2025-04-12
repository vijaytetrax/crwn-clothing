import CategoryItem from '../Category-item/Category_item_component';
import './Directory_style.scss';

const Directory = ({ categories }) => {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryItem
                    key={category.id}
                    category={category}
                />
            ))}
        </div>
    )
}

export default Directory;