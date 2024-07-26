import { useTodos } from '@/store/todo.store';
import { FC } from 'react';
import { Card } from '../ui/card';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const FilterSortTodos: FC = () => {
  const { filterStatus, setFilterStatus, sortOption, setSortOption } =
    useTodos();

  return (
    <Card className='flex flex-col gap-3 justify-between items-center p-3 mb-3 sm:flex-row'>
      <div className='w-full flex flex-col gap-3'>
        <Label>Filter</Label>
        <Select
          value={filterStatus}
          onValueChange={(e) =>
            setFilterStatus(e as 'all' | 'completed' | 'incomplete')
          }
        >
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Select filter' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='all'>All</SelectItem>
              <SelectItem value='completed'>Completed</SelectItem>
              <SelectItem value='incomplete'>Incomplete</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className='w-full flex flex-col gap-2'>
        <Label>Order</Label>
        <Select
          value={sortOption}
          onValueChange={(e) => setSortOption(e as 'date' | 'priority')}
        >
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Select order' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='date'>Date</SelectItem>
              <SelectItem value='priority'>Priority</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </Card>
  );
};

export default FilterSortTodos;
