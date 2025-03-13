export function getInitials(name: string): string {
    let initials = '';
    if (name?.includes(' ') && !name?.includes('  ')) {
      const words = name.split(' ');
      initials = words?.slice(0, 2)?.map(word => word[0]?.toUpperCase())?.join('');
    } else {
      const consonants = 'bcdfghjklmnpqrstvwxyz';
      let count = 0;
      for (let i = 0; i < name?.length; i++) {
        if (consonants?.includes(name[i]?.toLowerCase())) {
          initials += name[i]?.toUpperCase();
          count++;
        }
        if (count === 2) {
          break;
        }
      }
    }
    return initials;
  }