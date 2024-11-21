function skillMembers() {
    return this.members.filter(member => member.skills.length > 0);
}