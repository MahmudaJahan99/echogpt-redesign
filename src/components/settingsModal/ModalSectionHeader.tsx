interface ModalSectionHeaderProps {
  heading: string;
}

const ModalSectionHeader = ({ heading }: ModalSectionHeaderProps) => {
  return (
    <p className="text-xs font-medium uppercase tracking-wide mb-2.5 text-muted-foreground">
      {heading}
    </p>
  );
};

export default ModalSectionHeader;
