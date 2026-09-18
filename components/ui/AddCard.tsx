import DropDown from '@/components/ui/DropDown';
import ButtonAction from '@/components/ui/ButtonAction';
    
export default function AddCart() {
    return (
        <div className="mt-4 flex items-center gap-6">
            <DropDown />
            <ButtonAction className="flex-1" />
        </div>
    );
}
