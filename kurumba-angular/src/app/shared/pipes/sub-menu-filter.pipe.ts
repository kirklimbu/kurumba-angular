import { Pipe, PipeTransform } from '@angular/core';
import { HomeItem } from 'src/app/modules/home/home-item.model';

@Pipe({
  name: 'subMenuFilter'
})
export class SubMenuFilterPipe implements PipeTransform {

  transform(subMenuList :HomeItem[], label): HomeItem[] {
    console.log('filter submenu list input data: '+subMenuList);

    const filteredSubLinks = subMenuList.filter(
      link => {
        return link.parentMenu.includes(label);
      }
    );
    return filteredSubLinks;
  }
}
