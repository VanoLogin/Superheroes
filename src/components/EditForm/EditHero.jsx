import { Formik, Field, Form } from "formik";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import styles from "./style.module.scss";
import { updateHero } from "../../services/heroService";

export default function EditHero({ hero, onClose, onHeroUpdated }) {
  return (
    <Modal modalTitle="Edit Superhero" onClose={onClose}>
      <Formik
        initialValues={{
          nickname: hero.nickname || "",
          realName: hero.realName || "",
          originDescription: hero.originDescription || "",
          superpowers: hero.superpowers || "",
          catchPhrase: hero.catchPhrase || "",
          image: hero.image || "",
        }}
        onSubmit={async (values) => {
          try {
            const updatedHero = await updateHero(hero._id, values);
            onHeroUpdated(updatedHero);
            onClose();
          } catch (error) {
            console.error("Error updating hero:", error);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <label>
              Nickname:
              <Field type="text" name="nickname" />
            </label>
            <label>
              Real Name:
              <Field type="text" name="realName" />
            </label>
            <label>
              Origin Description:
              <Field as="textarea" name="originDescription" />
            </label>
            <label>
              Superpowers:
              <Field type="text" name="superpowers" />
            </label>
            <label>
              Catch Phrase:
              <Field type="text" name="catchPhrase" />
            </label>
            <label>
              Image URL:
              <Field type="text" name="image" />
            </label>
            <button
              type="submit"
              className={styles.saveBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

EditHero.propTypes = {
  hero: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onHeroUpdated: PropTypes.func.isRequired,
};
